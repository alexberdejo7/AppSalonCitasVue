<template>
  <div>
    <!-- Puedes agregar contenido adicional aquí si es necesario -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Redirige automáticamente a la página de inicio de sesión al montar el componente HomeView
  router.push({ name: 'login' });
});
</script>