<template>
  <div class="join">
      <h2>Join As Employee</h2>
      <form @submit.prevent="joinempl">
        <div class="form-col">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
          </div>
          <div class="form-group">
            <label for="position">Position</label>
            <input type="text" id="position" v-model="position">
          </div>
        </div>
        <div class="form-col">
          <div class="form-group">
            <label for="sector">Sector</label>
            <select id="sector" v-model="sector">
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div class="form-group">
            <label for="salary">Salary</label>
            <input type="text" id="salary" v-model="salary">
          </div>
        </div>
        <input type="submit" class="btn" value="Join">
      </form>
  </div>
</template>

<script>
export default {
  name: 'Join',
  props: {
    employ: Object
  },
  data(){
    return{
      name: '',
      position: '',
      sector: '',
      salary: ''
    }
  },
  methods: {
    joinempl(){
      const empl = {
        name: this.name,
        position: this.position,
        sector: this.sector,
        salary: this.salary
      }

      this.$emit('add-empl', empl);
    }
  }
}
</script>

<style scoped>
.join{
  width: 940px;
  margin: 20px auto;
  background: #ccc;
  padding: 10px 20px; 
}

.form-col{
  display: flex;
  justify-content: space-around;
}

.form-group{
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.form-group label{
  font-size: 16px;
}

.form-group input, .form-group select{
  height: 25px;
  border: none;
}

.btn{
  background: #b02ab4;
  color: #fff;
  padding: 8px 25px;
  box-shadow: 0 0 #000;
  border: none;
  margin: 10px 0 10px 105px;
}
</style>