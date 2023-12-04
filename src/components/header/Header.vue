<template>
  <header class="header">
    <Navbar/>
  </header>
</template>

<script>
import Navbar from "@/components/header/navbar/Navbar";

export default {
  name: 'Header',
  components: {
    Navbar,
  }
}
</script>