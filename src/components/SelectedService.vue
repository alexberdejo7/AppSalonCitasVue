
<script setup>
import { formatCurrency } from '../helpers/formatter';
import { useAppointmentsStore } from '../stores/appointmens';

const appointments = useAppointmentsStore()


defineProps({
  service: {
    type: Object
  }
})


</script>

<template>
  <div class="border border-sky-600 rounded-lg p-4 flex justify-between items-center">
      <div>
        <p class="text-xl font-extrabold text-white"> {{ service.name }}</p>
        <p class="text-xl font-normal text-amber-400"> {{ formatCurrency (service.price) }}</p>
      </div>
      
      
      <button
        type="button"
        class="inlinex-flex items-center rounded-lg bg-red-500 text-white text-sm px-3 py-2 font-semibold shadow-sm ring-1 ring-inset ring-red-600 hover:bg-red-700"
        @click="appointments.onServicesSelected(service)"
        > Eliminar
      </button>
  
</div>

</template>