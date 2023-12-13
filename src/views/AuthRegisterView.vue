<template>
    <div id="div">
        <AuthRegister />
    </div>
</template>
  
<script>
import AuthRegister from '../components/auth/AuthRegister.vue';
  
export default {
    name: 'register',
    components: {
        AuthRegister
    }
}
</script>