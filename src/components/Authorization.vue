<template>
  <section class="authorization">
    <div class="authorization-inner">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>


<script>
export default {
  name: 'Authorization',
  props: {
    msg: String
  }
}
</script>