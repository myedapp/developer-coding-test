<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
              <h4 class="title">All Students</h4>
              <p class="category">These are all of the students:</p>
          </div>
          <div class="card-content table-responsive table-full-width">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Roll Number</th>
                  <th scope="col">Student Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data">
                  <td scope="row">{{d.id}}</td>
                  <td>{{d.fullname}}</td>
                </tr>
              </tbody> 
            </table>

          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    props :{
      data:{
        type : Array,
        required : true
      }
    }
  }
</script>
<style>

</style>
