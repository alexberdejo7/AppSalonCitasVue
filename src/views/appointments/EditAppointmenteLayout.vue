<script setup>
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import AppointmentAPI from '../../api/AppointmentAPI'
import {useAppointmentsStore} from '../../stores/appointmens'

const appointments = useAppointmentsStore()
const router = useRouter()
const route = useRoute()

const {id} = route.params

onMounted(async () => {
  try {
    const { data } = await AppointmentAPI.getById(id)
    appointments.setSelectedAppointment(data)
    
  } catch (error) {
    router.push({name: 'my-appointments'})
  }

  
})


</script> 

<template>
      
        <nav class="my-10 flex gap-3">
            <RouterLink
                :to="{name: 'edit-appointment'}"
                class="flex-1 text-center rounded-lg text-sm p-2 uppercase font-bold hover:bg-blue-600 hover:text-white"
                :class="route.name === 'edit-appointment' ? 'bg-indigo-600 text-white' : 'bg-white text-blue-600 ' "
                >
                Servicios
            </RouterLink>

            <RouterLink
                :to="{name: 'edit-appointment-details'}"
                class="flex-1 text-sm text-center rounded-lg p-3 uppercase font-bold  hover:bg-blue-600 hover:text-white"
                :class="route.name === 'edit-appointment-details' ? 'bg-indigo-600 text-white' : 'bg-white text-blue-600 ' "            
                >
                Cita y Resumen
            </RouterLink>
        </nav>
    

<main class="space-y-4">
    <RouterView />
</main>
    


</template>