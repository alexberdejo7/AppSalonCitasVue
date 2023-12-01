
<script setup>
import { formatCurrency} from '../helpers/formatter'

defineProps({
  service: {
    type: Object
  } 
})



</script>


<template>

  <div
    class="p-5 space-y-5 rounded-lg cursor-pointer bg-sky-200"
  >
      <p class="text-2xl font-light"> {{service.name}}</p>

      <p class="text-lg " > {{formatCurrency( service.price)}} </p>
  </div>
</template>
