
<script setup>
import { RouterView } from 'vue-router';

  const authRoutes = [
    {name: 'register', text: 'Crear una cuenta'},
    {name: 'login', text: 'Iniciar Sesion'},
  ]


</script>

<template>
  <div class="mx-auto lg-w-2/5 mt-10">
    <RouterView />

    <nav class="mt-10 flex flex-col items-center space-y-5 md:flex-row md:justify-between md:space-y-8">
        <RouterLink
          v-for="authRoute in authRoutes"
          class="uppercase font-bold text-white"
          :to="{name: authRoute.name}"
        >
        {{ authRoute.text }}
      </RouterLink>

    </nav>

  </div>
</template>