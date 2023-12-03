import { defineStore } from "pinia";
import {ref, computed, onMounted} from 'vue'


export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')

    onMounted(() => {
        const startHour = 10
        const lastHour = 22

            for( let hour = startHour; hour <= lastHour; hour++) {
                hours.value.push(hour + ':00')
            }
    })




    function onServicesSelected(service) {
        if(services.value.some(selectedService => selectedService._id === service._id)) {
                services.value = services.value.filter(selectedService => selectedService._id !== service._id)
            } else {
                //limitar servicios seleccionados
                if(services.value.length === 3) {
                    alert('Maximo 3 servicios por cita')
                    return
                }
                services.value.push(service)
            }

            
    }


    function confirmAppointment() {
        const reservation = {
            services: services.value.map (service => service._id),
            date: date.value,
            time: time.value,
            totalAmount: totalAccount.value
        }

        console.log(reservation)
    }




    const isServiceSelected = computed(() => {
        return (id) => services.value.some(service => service._id === id)
    })

    const noServiceSelected = computed(() => services.value.length === 0)


    const totalAccount = computed(() => {
        return services.value.reduce((total, service) => total + service.price, 0)
    })


    const ReservationIsValid = computed(() => {
        return services.value.length && date.value.length && time.value.length 
    })



    
    return {
        onServicesSelected,
        isServiceSelected,
        services,
        date,
        hours,
        ReservationIsValid,
        time,
        totalAccount,
        noServiceSelected,
        confirmAppointment
    }

})