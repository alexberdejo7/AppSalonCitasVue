
<script setup>
import SelectedService from '../../components/SelectedService.vue';
import { formatCurrency } from '../../helpers/formatter';
import { useAppointmentsStore } from '../../stores/appointmens';

const appointments = useAppointmentsStore()

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

</template>
