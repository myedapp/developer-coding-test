<template>
  <div class="landing">
    <div class="container-fluid">
      <div class="row">
        <h1 class="col-xs-12 col-sm-6 offset-sm-3">{{ msg }}</h1>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 offset-sm-3">
          <ul class="list-group">
            <li v-bind:items="users" v-for="(user) in users" :key="user.id">
              {{user.fullname}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as ApiService from '@/service/apiService'

export default {
  name: 'UserQuests',
  components: {},
  beforeMount () {
    // Retrieve Users From Data Source
    ApiService.getUsers().then((retrievedUsers) => {
      this.users = retrievedUsers || []
    }).catch((err) => {
      console.log('Error Retrieving Users')
      this.users = []
      this.alertMessage = err.message
      console.log(error.message);
    })
  },
  methods: {
    loadData () {
      console.log('LOAD DATA')
    },
  },
  fetchMore () {
    // debugger;
    this.loadData()
  },
  data () {
    return {
      loading: false,
      msg: 'UserQuests',
      users: [],
      alertMessage: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
