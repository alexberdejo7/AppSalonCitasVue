
<script setup>
import SelectedService from '../../components/SelectedService.vue';
import { formatCurrency } from '../../helpers/formatter';
import { useAppointmentsStore } from '../../stores/appointmens';
import VueTailwindDatePicker from 'vue-tailwind-datepicker'
import {ref} from 'vue'


const appointments = useAppointmentsStore()

const Dateformatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMM',
}) 

const disableDate = (date) => {
  const today = new Date()
  return date < today || date.getMonth() > today.getMonth() + 1 || [0,6].includes(date.getDay)
}


</script>


<template>

  <h2 class="text-3xl font-extrabold text-white mt-2"> Detalles y Resumen de tu cita </h2>
  <p class="text-white text-md"> A continuacion verifica tu cita </p>

  <h3 class="text-xl font-semibold mt-5 text-white"> Servicios  </h3>

  <!-- Computed si no se ha seleccionado servicios  -->
    <p 
        class="text-white text-3xl text-center"
        v-if="appointments.noServiceSelected" 
    >  No has seleccionado Servicios </p>


  <div v-else  class="grid gap-3">
      <SelectedService
          v-for="service in appointments.services"
          :key="service._id"
          :service="service"
      />

    <p 
        class="text-right text-amber-400 text-xl"
    > Total: <span class="font-bold"> {{ formatCurrency(appointments.totalAccount) }}
     </span> 
    </p>
  </div>



  <!-- Seccion Calendario  -->
  <div class="space-y-5" v-if="!appointments.noServiceSelected">
      <h3 class="text-2xl mt-10 font-extrabold text-center text-white"> Fecha | Hora </h3>
          <div class="lg:flex gap-5 items-start">
              <div  class="w-full lg:w-96 bg-white justify-center rounded-md">
                  <VueTailwindDatePicker 
                    :disable-date="disableDate"
                    il8n="es-mx"
                    as-single
                    no-input
                    :formatter="Dateformatter"
                    v-model="appointments.date"
                  />
              </div>
          
              <div class="flex-1 grid grid-cols-2 xl:grid-cols-3 gap-3 mt-5 ">   
                <button
                  v-for="hour in appointments.hours"
                  class="block text-orange-600 rounded-lg text-md font-black p-3 "
                 :class="appointments.time === hour ? 'bg-black text-amber-700' : 'bg-white'"
                  @click="appointments.time = hour"
                  >
                  {{hour}}
                </button>
              </div>
        </div>

        <!-- Reservar una cita valida -->
        <div class="flex justify-end" v-if="appointments.ReservationIsValid">
            <button
              class="w-full md:w-auto bg-green-700 uppercase hover:bg-green-600 p-3 rounded-lg text-md font-black text-white"
            @click="appointments.confirmAppointment"
            >
                Confirmar cita

            </button>

        </div>
  </div>


</template>
