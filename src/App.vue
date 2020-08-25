<template>
  <div>
    <Navbar/>
    <Employees/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Employees from './components/Employees'

export default {
  name: 'App',
  components: {
    Navbar,
    Employees
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  color: #b02ab4;
}
</style>
