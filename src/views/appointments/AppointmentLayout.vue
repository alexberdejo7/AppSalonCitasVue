
<script setup>
import { RouterLink } from 'vue-router';

 


</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-lg lg:text-6xl font-black text-white"> App Salon</h1>

    <div class="flex flex-col space-y-4">
        <div class="flex gap-2 items-center">
          <p class="text-white text-right"> Hola: Usuario </p>
        
          <button
          type="button"
          class="bg-red-600 hover:bg-red-700 p-2 uppercase text-white text-xs font-extrabold rounded-lg"  
          >
          Cerrar Sesion
        </button>
        </div>

        <nav class="flex gap-2 items-center justify-end">
            <RouterLink 
            :to="{name: 'my-appointments'}"
            class="text-gray-200 p-3 uppercase text-xs font-black rounded-lg"> Mis citas
            </RouterLink>

            <RouterLink
            :to="{name: 'new-appointment'}"
            class="text-gray-200 p-3 uppercase text-xs font-black rounded-lg bg-blue-800"
            >
              Nueva Cita
            </RouterLink>


        </nav>


    </div>
  </div>


  <main>
    <RouterView />
  </main>

</template>
