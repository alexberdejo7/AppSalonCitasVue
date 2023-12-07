<script setup>
import AuthApi from '../../api/AuthApi.js'
import {inject} from 'vue'

const toast = inject('toast')

const handleSubmit = async(formData) => {
    try {
        const {data} = await AuthApi.login(formData)
        console.log(data)
    }
    catch (error) {
        toast.open({
          message: error.response.data.msg,
          type: 'error'
        })
      }
    }
    

</script>

<template>
  <h1 class="text-5xl font-extrabold text-white text-center mt-7"> Inicia sesión </h1>
  <p class="text-md italic text-white text-center my-5"> Si ya tienes una cuenta inicia sesion.  Si no ve a crear cuenta  </p>

      <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="Ups! Error al crear tu cuenta, revisa las notificaciones"
        @submit="handleSubmit"
        > 

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
            type="password"
            label="Password"
            name="password"
            placeholder="Contraseña de usuario"
            validation="required"
            :validation-messages="{
              required: 'La contraseña es obligatorio',
            }"
          >
        </FormKit>






        <FormKit type="submit"> INICIAR SESION </FormKit>


      </FormKit>
</template>