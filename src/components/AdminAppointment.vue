<script setup>
    import { displayDate } from '../helpers/date'
    import { formatCurrency } from '../helpers/formatter';
   
    defineProps({
        appointment: {
            type: Object
        }
    })
</script>

<template>
          <div 
              class="bg-white p-5 space-y-3 rounded-lg"
          >
                <p class="text-slate-600 text-sm font-black">
                    Fecha: <span class="font-extrabold underline uppercase"> {{ displayDate( appointment.date ) }} </span>
                    <span class="p-2 text-blue-800 underline text-xl font-extrabold">Hora:  {{ appointment.time }}.</span>
                </p>

                <p class="text-gray-800 text-sm font-black">
                    Nombre Cliente: <span class="font-bold text-green-700"> {{ appointment.user.name }}  </span>
                    Email: <span class="font-light text-gray-900 italic"> {{ appointment.user.email }} </span>
                </p>

                <p class="text-xl text-green-800 font-extrabold">Servicios Solicitados en la cita</p>
                <div v-for="service in appointment.services">
                    <p class="text-md text-slate-800 font-extrabold" >{{ service.name }}</p>
                    <p class="text-lg font-black text-green-500">{{ formatCurrency( service.price ) }}</p>
                </div>

                <p class="text-lg font-black text-right">
                    Total a pagar: <span class="text-amber-600"> {{ formatCurrency( appointment.totalAccount ) }} </span>
                </p>
            </div>
</template>