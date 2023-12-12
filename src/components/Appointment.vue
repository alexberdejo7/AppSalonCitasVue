
<script setup>
import {displayDate} from '../helpers/date' 
import {formatCurrency} from '../helpers/formatter'
import { useAppointmentsStore } from '../stores/appointmens';

const appointments = useAppointmentsStore()


defineProps({
  appointment: {
    type: Object
  }
})

</script>

<template>
  <div class="bg-white p-5 space-y-3 rounded-lg">
      <p class="text-gray-800 font-black ">
          Fecha: <span class="font-light"> {{ displayDate (appointment.date) }} </span>
          Hora: <span class="font-light"> {{  appointment.time }}  </span>
      </p>

      <p class="text-lg font-black "> Servicios reservados de la cita: </p>
          <div v-for="service in appointment.services">

            <p> {{ service.name }} </p>
            <p class="text-xl font-black text-blue-500"> {{ formatCurrency (service.price) }} </p>

         </div>
      <p class="text-xl font-black text-right"> 
        Total a pagar: <span class="text-amber-600 font-bold text-sm"> {{ formatCurrency (appointment.totalAccount) }} </span>
      </p>


      <div class="flex gap-2 items-center"> 
        <RouterLink 
        :to="{name: 'edit-appointment', params: {id : appointment._id}}"
        class="bg-indigo-600 rounded-lg p-2 text-white text-sm uppercase font-black flex-1 md:flex-none"
        >
          Editar cita
        </RouterLink>

        <button
        class="bg-red-600 rounded-lg p-2 text-white text-sm uppercase font-black flex-1 md:flex-none"
        @click="appointments.deleteAppointment(appointment._id)"
        >
        Cancelar cita 
        </button>   
      </div>
  </div>
</template>