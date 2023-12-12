<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useAppointmentsStore } from '../../stores/appointmens';

const appointsments = useAppointmentsStore()
const route = useRoute()

onMounted(() => {
    appointsments.clearAppointmentData()
})



</script> 

<template>
    
        <nav class="my-10 flex gap-3">
            <RouterLink
                :to="{name: 'new-appointment'}"
                class="flex-1 text-center rounded-lg text-sm p-2 uppercase font-bold hover:bg-blue-600 hover:text-white"
                :class="route.name === 'new-appointment' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 ' "
                >
                Servicios
            </RouterLink>

            <RouterLink
                :to="{name: 'appointment-details'}"
                class="flex-1 text-sm text-center rounded-lg p-3 uppercase font-bold  hover:bg-blue-600 hover:text-white"
                :class="route.name === 'appointment-details' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 ' "            
                >
                Cita y Resumen
            </RouterLink>
        </nav>
    

<main class="space-y-4">
    <RouterView />
</main>
    


</template>