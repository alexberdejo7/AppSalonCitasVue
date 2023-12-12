
<script setup>
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()

  const authRoutes = [
    {name: 'register', text: 'Crear una cuenta'},
    {name: 'login', text: 'Iniciar Sesion'},
    {name: 'forgot-password', text: 'Olvide mi contraseña'},
  ]


</script>

<template>
  <div class="mx-auto lg-w-2/5 mt-5">
    <RouterView />

    <nav class="mt-10  flex flex-wrap items-center justify-center md:justify-between">
        <RouterLink
          v-for="authRoute in authRoutes"
          class="uppercase p-3 font-bold text-white"
          :to="{name: authRoute.name}"
          :class="{ 'hidden' : route.name === authRoute.name}"
        >
        {{ authRoute.text }}
      </RouterLink>

    </nav>

  </div>
</template>