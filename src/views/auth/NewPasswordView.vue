
<script setup>
import { inject, onMounted, ref } from 'vue';
import AuthApi from '../../api/AuthApi';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter()
const route = useRoute()
const toast = inject('toast')
const { token } = route.params

const validToken = ref(false)

onMounted(async () => {
  try {
    const { data } = await AuthApi.verifyPasswordResetToken(token)
    validToken.value = true
  } catch (error) {
    toast.open({
      message: error.response.data.msg,
      type: 'error'
    })
  }
})

const handleSubmit = async({password}) => {
  
  try {
    const { data } = await AuthApi.updatePassword(token, {password})
    toast.open({
      message: data.msg,
      type: 'success'
    })
    setTimeout(() => {
      router.push({name: 'login'})
    }, 3000)
  } catch (error) {
    toast.open({
      message: error.response.data.msg,
      type: 'error'
    })
  }
}


</script>

<template>
 <div v-if="validToken">

   <h1 class="text-5xl font-extrabold text-white text-center mt-7"> Nueva contraseña </h1>
   <p class="text-md italic text-white text-center my-5"> Ingresa tu nueva contraseña a tu cuenta.  </p>

  <FormKit
      id="newPasswordForm"
      type="form"
      :actions="false"
      incomplete-message="No se puedo enviar! Revisa el correo"
      @submit="handleSubmit"
  >

        <FormKit
              type="password"
              label="Password"
              name="password"
              placeholder="Contraseña de usuario - Min 8 digitos"
              validation="required|length:8"
              :validation-messages="{
                required: 'La contraseña es obligatorio',
                length: 'La contraseña debe contener minimo 8 digitos'
              }"
              >
        </FormKit>

   
      

      <FormKit 
        type="submit">  
          Guardar Nueva contraseña
      </FormKit>
      
    </FormKit>
  </div>


  <p v-else class="text-3xl text-center font-black text-white"> Enlece para reestblacer contraseña no valido</p>
</template>
