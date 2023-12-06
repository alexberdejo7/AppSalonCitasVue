
<script setup>
import ServicesItem from '../../components/ServicesItem.vue';
import {useServiceStore} from '../../stores/services'




const storeservice = useServiceStore()

</script>



<template>
  
  <h2 class="text-4xl font-extrabold text-white mt-10"> Servicios </h2>
  <p class="text-white text-lg mt-4"> A continuacion elige al menus un servicio</p>
    
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
    <ServicesItem 
      v-for="service in storeservice.services"
      :key="service._id"
      :service="service"
      

    />
    
  </div>
</template>