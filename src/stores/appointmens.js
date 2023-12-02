import { defineStore } from "pinia";
import {ref, computed} from 'vue'


export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])


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

    const isServiceSelected = computed(() => {
        return (id) => services.value.some(service => service._id === id)
    })

    const noServiceSelected = computed(() => services.value.length === 0)


    const totalAccount = computed(() => {
        return services.value.reduce((total, service) => total + service.price, 0)
    })


    return {
        onServicesSelected,
        isServiceSelected,
        services,
        totalAccount,
        noServiceSelected
    }

})