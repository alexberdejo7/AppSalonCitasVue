
<script setup>

</script>


<template>
 
    <h1 class="text-5xl font-extrabold text-white text-center mt-7"> Olvide mi contraseña </h1>
    <p class="text-md italic text-white text-center my-5"> Recupera el acceso a tu cuenta.  </p>

    <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="Ups! Error al crear tu cuenta, revisa las notificaciones"
        @submit="handleSubmit"
        />
        
        <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Tu correo de usuario"
            validation="required|email"
            :validation-messages="{
              required: 'El correo es obligatorio',
              email: 'El correo es invalido'
            }"
          >
        </FormKit>

        <FormKit 
          type="submit">  
            Enviar instrucciones

        </FormKit>

  
</template>
