<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
              <h4 class="title">Questions</h4>
              <div class="form-group">
                <input type="text" v-model="userId" placeholder="Enter student id to narrow search" class="form-control"></div>
              </div>
          </div>
          <div class="card-content table-responsive table-full-width">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Student Id</th>
                  <th class="text-center" scope="col">
                    <span>Question List</span>
                    <hr/>
                    <div class="text-left">
                      <span>No#</span>&nbsp;&nbsp;&nbsp;
                      <span>Name</span>
                    </div>
                  </th>
                  <th scope="col">Completed</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cell in questionsData" v-if="userId == cell.user_id || userId =='' ">
                  <td>{{ cell.user_id }}</td>
                  <td>
                    <div v-for="q in cell.quest_paths">
                      <span>{{q.order+1}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>{{q.quest.name}}</span>
                    </div>
                  </td>
                  <td>
                    <div v-for="q in cell.quest_paths">
                      <span>{{q.mark.completion}} %</span>
                    </div>
                  </td>
                  <td>
                    <div v-for="q in cell.quest_paths">
                      <span>{{q.mark.mark ? q.mark.mark : 'Not Marked'}}</span>
                    </div>
                  </td>
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
      questionsData:{
        type : Array,
        required : true
      }
    },
    data () {
     return{
        userId : ""
      }
    }
  }
</script>
<style>
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
</style>
