<template>
  <div class="container">
    <Join v-on:add-empl="addempl"/>
    <h2>All Employees Record</h2>
    <div class="box">
      <div v-for="empl in employees" v-bind:key="empl.id" class="card">
        <form @submit.prevent="updatempl" v-if="employe.name != '' && employe.id == empl.id">
          <input type="text" v-model="employe.name">
          <input type="text" v-model="employe.position">
          <input type="text" v-model="employe.salary"> <br>
          <input type="submit" class="btn" value="Update">
        </form>
        <h3>{{ empl.name}}</h3>
        
        <h5>Positon: {{ empl.position}}</h5>
        <p>Department: {{ empl.sector}}</p>
        
        <p>Salary: {{ empl.salary}}</p>
        <span v-on:click="deleteEmpl(empl.id)" class="trash">Delete</span>
        <span v-on:click="editEmpl(empl.id)" class="edit">Edit</span>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config/init'
import Join from './Join'
export default {
  name: 'Employees',
  components: {
    Join
  },
  data(){
    return{
      employees: [],
      employe: {}
    }
  },

  methods: {
    updatempl(){
      db.collection('employees').doc(this.employe.id).update({
        name: this.employe.name,
        position: this.employe.position,
        salary: this.employe.salary,
      })
      .then(() => {
        console.log('updated');
        this.employe = {};
        this.getempl();
      })
    },
    addempl(data){
      db.collection('employees').add({
        name: data.name,
        position: data.position,
        sector: data.sector,
        salary: data.salary
      })
        .then(() => {
          console.log('successfully added');
          this.getempl();
        })
      
    },

    deleteEmpl(id){
      db.collection('employees').doc(id).delete()
        .then(() => {
          this.employees = this.employees.filter(empl => empl.id != id);
        })
    },

    getempl(){
    this.employees = [];
    db.collection('employees').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let empl = doc.data();
          empl.id = doc.id;
          this.employees = [...this.employees, empl];
        })
      })
    },

    editEmpl(id){
      db.collection('employees').doc(id).get()
        .then(data => {
          this.employe = data.data();
          this.employe.id = id;
          console.log(this.employe);
        })
    }
  },
  created(){
    db.collection('employees').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let empl = doc.data();
          empl.id = doc.id;
          this.employees = [...this.employees, empl];
        })
      })
  }
}
</script>

<style scoped>
.container{
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}

h2{
  margin-left: 10px;
}
.box{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card{
  background: #ccc;
  padding: 20px 30px;
  width: 250px;
  margin: 10px;
  color: #444;
  position: relative;
}

h3{
  color: #b02ab4;
  font-size: 24px;
  margin-bottom: 10px;
}

.box h5, .box p{
  font-size: 16px;
  margin: 5px;
}

.trash{
  color: #fff;
  background: #db1e1e;
  position: absolute;
  right: 10px;
  bottom: 5px;
  padding: 5px;
  cursor: pointer;
}

.edit{
  color: #fff;
  background: rgb(33, 119, 218);
  position: absolute;
  right: 80px;
  bottom: 5px;
  padding: 5px;
  cursor: pointer;
}
</style>
