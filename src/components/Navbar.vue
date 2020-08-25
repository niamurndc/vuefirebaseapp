<template>
  <div class="navbar">
    <a href="/" class="home">Emplyees</a>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar{
  display: flex;
  height: 80px;
  background: #b02ab4;
  color: #fff;
}

.navbar a{
  margin: 20px 70px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}
</style>