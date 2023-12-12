import { defineStore } from "pinia";
import {ref, watch, computed, inject, onMounted} from 'vue'
import AppointmentAPI from "../api/AppointmentAPI";
import { converToISO, convertToDDMMYYYY } from "../helpers/date"; 
import { useRouter } from 'vue-router'
import {useUserStore} from '../stores/user'

export const useAppointmentsStore = defineStore('appointments', () => {
   
    const appointmentId = ref('')
    const services = ref([])
    const date = ref('')
    const hours = ref([])
    const time = ref('')
    const appointmentsByDate = ref([])

const toast = inject('toast')
const router = useRouter()
const user =  useUserStore()

    onMounted(() => {
        const startHour = 10
        const lastHour = 22

            for( let hour = startHour; hour <= lastHour; hour++) {
                hours.value.push(hour + ':00')
            }
    })

    watch(date, async () => {
        time.value = ''
        if(date.value === '') return

        //Obtener citas 
        const { data } = await AppointmentAPI.getByDate(date.value)
        
        if(appointmentId.value) {
            appointmentsByDate.value = data.filter(appointment => appointment._id !== appointmentId.value)
            time.value = data.filter(appointment => appointment._id === appointmentId.value)[0].time
        } else {
            appointmentsByDate.value = data
        }

     })


     function setSelectedAppointment(appointment) {
        services.value = appointment.services
        date.value = convertToDDMMYYYY(appointment.date)
        time.value = appointment.time
        appointmentId.value = appointment._id
        
      
     }




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


    async function saveAppointment() {
        const appointment = {
            services: services.value.map (service => service._id),
            date: converToISO(date.value),
            time: time.value,
            totalAccount: totalAccount.value
        }

        if(appointmentId.value) {
            try {

                const { data } = await AppointmentAPI.update(appointmentId.value, appointment)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })  
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await AppointmentAPI.create(appointment)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })   
            } catch (error) {
                console.log(error)
            }
        }

        clearAppointmentData()
        user.getUserAppointments()

        router.push({name: 'my-appointments'})
    }

        
      
    
    function clearAppointmentData() {
        appointmentId.value = ''
        services.value = []
        date.value = ''
        time.value = ''
        
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

    const isDateSelected = computed(() => {
        return date.value ? true : false
    })

    const disabledHours = computed(() => {
        return (hour) => {
            return appointmentsByDate.value.find(appointment => appointment.time === hour)
        }
    })


    
    return {
        onServicesSelected,
        isDateSelected,
        isServiceSelected,
        services,
        disabledHours,
        date,
        hours,
        ReservationIsValid,
        time,
        totalAccount,
        noServiceSelected,
        saveAppointment,
        clearAppointmentData,
        setSelectedAppointment
        
    }

})