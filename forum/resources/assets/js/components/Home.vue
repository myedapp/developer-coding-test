<template>
	<div class="container">
    <vue-progress-bar></vue-progress-bar>
    <div class="intro">
      <h3>Welcome to the student portal.</h3>
      <p>Please navigate through pages using the tabs provided.</p>
    </div>
    <vue-navbar :tabs="tabList"></vue-navbar>
    <vue-users-table v-if="activeTab == 'Students'" :data="users"></vue-users-table>
    <vue-questions-table v-if="activeTab == 'Questions'" :questionsData="question_pathways"></vue-questions-table>   
	</div>
</template>
<script type="text/javascript">
import VueNavbar from './UIComponents/Navbar'
import VueUsersTable  from './UIComponents/UsersTable'
import VueQuestionsTable from './UIComponents/QuestionsTable'

export default {
  components: {
    VueNavbar,
    VueUsersTable,
    VueQuestionsTable
  },
  data() {
    return {
      question_pathways: [],
      users: [],
      tabList : ['Students', 'Questions'],
      activeTab : 'Students'
    } 
  },
  mounted () {
    this.$Progress.finish()

    bus.$on('tab-trigger' , (tabName) => {
      this.activeTab = tabName;
    })
  },
  beforeRouteEnter(to, from, next) {
    //gets all questions
    axios.get('/students/questions/all')
    .then((response) => {
      //necxt tick to access the vm instance
      next((vm) => {
        vm.question_pathways = response.data
       
        //gets all students
        axios.get('/students/all')
        .then((response) => {
          vm.users = response.data
          })
        .catch((response) => {
          console.log("User data not found")
        })
      })
    })
    .catch((response) => {
      console.log("Question data not found")
    })
  },
  beforeMount(){
    //for the progress bar
    this.$Progress.start()
  },
  created () {

    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>
<style type="text/css">
  .intro {
    padding-bottom: 20px;
  }
</style>