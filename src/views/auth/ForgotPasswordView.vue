
<script setup>
import { inject } from 'vue';
import AuthApi from '../../api/AuthApi';
import {reset} from '@formkit/core'

const toast = inject('toast')

const handleSubmit = async ({email}) => {
  try {
    const {data} = await AuthApi.forgotPassword({email})
    toast.open({
      message: data.msg,
      type: 'success'
    })
    reset('forgotPassword')
  } catch (error) {
    toast.open({
      message: error.response.data.msg,
      type: 'error'
    })
    
  }
}



</script>


<template>
 
    <h1 class="text-5xl font-extrabold text-white text-center mt-7"> Olvide mi contraseña </h1>
    <p class="text-md italic text-white text-center my-5"> Recupera el acceso a tu cuenta.  </p>

    <FormKit
        id="forgotPassword"
        type="form"
        :actions="false"
        incomplete-message="No se puedo enviar! Revisa el correo"
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
          />
        

        <FormKit 
          type="submit">  
            Enviar instrucciones
        </FormKit>
        
      </FormKit>
</template>
