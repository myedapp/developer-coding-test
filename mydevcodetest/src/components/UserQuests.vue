<template>
  <div class="landing">
    <div class="container-fluid">
      <div class="row">
        <h1 class="col-xs-12 col-sm-6 offset-sm-3 pageTitle">{{ msg }}</h1>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 offset-sm-3">
          <b-alert :show="alertMessage!==null" @dismissed="alertMessage=null" variant="warning">{{alertMessage}}</b-alert>
          <div class="list-group userQuests">
            <a href="#" class="list-group-item list-group-item-action col-xs-12"  v-bind:items="users" v-for="(user) in users" :key="user.id">
              <div class="row justify-content-between">
                <div class="col-4">
                  <p class="userFullName">{{user.fullname}}</p>
                </div>
                <div class="col-1">
                  <span class="badge badge-primary badge-pill">{{userPathCount(user)}}</span>
                </div>
              </div>
                <b-collapse class="col-xs-12 accordion" id="accordion1" ref="collapsible" v-if="hasPathways(user)" :visible="true" accordion="my-accordion" role="tabpanel">
                    <ul class="list-group questPaths">
                      <li class="list-group-item col-xs-12" v-for="(pathway) in getPathways(user)" :key="pathway.quest.id" :order="pathway.order">
                        <div class="row justify-content-between">
                           <div class="col-4">
                            <p class="col-12 questFullName">{{pathway.quest.name}}</p>
                            <p class="col-12 submittedValue" v-if="pathway.mark.submitted">SUBMITTED</p>
                          </div>
                          <div class="col-8">
                            <div class="row">
                              <div class="col-3 text-left">Completion:</div>
                              <div class="col-9">
                                  <b-progress v-if="pathway.mark.completion !== 0" :value="pathway.mark.completion || 0" show-progress :variant="getCompletionVariant(pathway.mark.completion)"></b-progress>
                                  <p class="col-12 notStarted" v-if="pathway.mark.completion === 0">Not Started</p>
                              </div>
                            </div>
                            <div class="row" v-if="pathway.mark.mark">
                              <div class="col-3 text-left">Mark:</div>
                              <div class="col-9">
                                  <b-progress :value="pathway.mark.mark" show-progress ></b-progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                </b-collapse>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as ApiService from '@/service/apiService'

import bAlert from 'bootstrap-vue/es/components/alert/alert'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bProgress from 'bootstrap-vue/es/components/progress/progress'
import bProgressBar from 'bootstrap-vue/es/components/progress/progress-bar'

export default {
  name: 'UserQuests',
  components: {
    bAlert,
    bCollapse,
    bProgress,
    bProgressBar
  },
  beforeMount () {
    this.$nextTick(() => {
      // Handle Retrieval and Compilation of User Data
      this.loadUserData().then((retrievedUserData) => {
        // Save retrieved records
        this.users = retrievedUserData
        this.alertMessage = null
      }).catch((retrieveUserError) => {
        // Handle Front End Error
        this.users = []
        this.alertMessage = retrieveUserError.message
      })
    })
  },
  methods: {
    // If Quest is not fully completed, use yellow bar not green
    getCompletionVariant (completion) {
      if (completion && completion === 100) return 'success'

      return 'warning'
    },
    // Return a valid array of user quest pathways
    getPathways (user) {
      return user.questPaths || []
    },

    // Flag to check if user has any valid quest pathways
    hasPathways (user) {
      return (user && user.questPaths && user.questPaths.length > 0)
    },

    // Is Accordion Panel Visible for this User?
    isVisible (user) {
      return true
    },
    // Generates "Quest Pathways Counter" for Badges
    userPathCount (user) {
      if (user && user.questPaths && user.questPaths.length > 0) {
        return user.questPaths.length
      }

      return 0
    },
    loadUserData () {
      return new Promise((resolve, reject) => {
        // Retrieve Users From Data Source
        ApiService.getUsers().then((retrievedUsers) => {
          this.users = retrievedUsers || []
          // Retrieve Quest Path Meta
          ApiService.getQuestPaths().then((retrievedPaths) => {
            const compiledUserData = this.compileUserData(retrievedPaths)
            return resolve(compiledUserData)
          }).catch((err) => {
            return reject(err)
          })
        }).catch((err) => {
          return reject(err)
        })
      })
    },
    // Match Quest Pathways Dataset with User Objects
    compileUserData (retrievedPaths) {
      const compiledData = []
      if (this.users.length > 0) {
        const users = this.users

        users.forEach((thisUser, key) => {
          compiledData[key] = thisUser
          compiledData[key].open = true
          compiledData[key].questPaths = []
          retrievedPaths.forEach(thisQuestPath => {
            if (thisUser.id === thisQuestPath.user_id) {
              compiledData[key].questPaths = thisQuestPath.quest_paths
            }
          })
        })
        this.users = compiledData
      }
      return compiledData
    }
  },
  data () {
    return {
      loading: true,
      msg: 'User Quest Pathways',
      users: [],
      alertMessage: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing {
  z-index: 1;
}
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

.userQuests .list-group-item {
  color: #343a40;
}

.userQuests .list-group-item .userFullName {
  margin: 0;
  text-align: left;
  font-size: 1.5rem;
  color: #343a40;
}

.list-group-item .accordion {
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border: none;
}

.list-group-item .questFullName,
.list-group-item .submittedValue {
  text-align: left;
  margin-bottom: 2px;
}
.list-group-item .submittedValue {
  color: #28a745;
}

.list-group-item .notStarted {
  color: #721c24;
  text-align: left;
  margin-bottom: 2px;
}

.accordion.active {
  display: block;
}
</style>
