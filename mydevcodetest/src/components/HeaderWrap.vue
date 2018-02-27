<template>
  <div id='header'>
    <img class="headerLogo" src='../assets/logo.jpg'>
    <h1>{{headerTitle}}</h1>
  </div>
</template>

<script>
export default {
  name: 'header-wrap',
  data () {
    return {
      headerTitle: 'myDev Code Test'
    }
  }
}
</script>

<style>
#header {
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}

#header h1 {
  height: 48px;
  width: 400px;
  font-size: 2rem;
  position: absolute;
  left: 64px;
}
.headerLogo {
  padding: 7px;
  height: 48px;
  position: absolute;
  left: 0;
}
</style>
