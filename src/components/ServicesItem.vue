
<script setup>
import { formatCurrency} from '../helpers/formatter'
import { useAppointmentsStore } from '../stores/appointmens';

const appointments = useAppointmentsStore()


defineProps({
  service: {
    type: Object
  } 
})



</script>


<template>

  <div
    class="p-5 space-y-5 rounded-lg cursor-pointer bg-blue-800 text-white "
    @click="appointments.onServicesSelected(service)"
    :class="appointments.isServiceSelected(service._id) ? 'bg-green-600 text-white' : 'bg-blue-900 '"
    >

      <p class="text-xl font-extrabold"> {{service.name}}</p>

      <p 
      class="text-md font-bold italic " 
      :class="appointments.isServiceSelected(service._id) ? ' text-gray-200' : 'text-gray-100 '"
      > {{formatCurrency( service.price)}} </p>
  </div>
</template>
