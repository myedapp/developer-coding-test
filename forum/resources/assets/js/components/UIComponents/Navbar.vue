<template>
	<ul class="nav nav-tabs nav-justified mouse" @click="changeTab($event.target)">
		<li v-bind:class="{ alive : activeTab == 'Students' }"> 
			<a>
				<icon name="user-circle-o" scale="2"></icon>
				<span class="text">Students</span>
			</a>
		</li>
		<li v-bind:class="{ alive : activeTab == 'Questions' }"> 
			<a>
				<icon name="quora" scale="2"></icon>
				<span class="text">Questions</span>
			</a>
		</li>
	</ul>
</template>
<script type="text/javascript">
import Icon from 'vue-awesome/components/Icon'
	export default {
		components: {
			Icon
		},
		props : {
			tabs : {
				type : Array,
				required : true
			}
		},
		data (){
			return{
      			activeTab : 'Students'
			}
		},
		methods : {
			changeTab(target) {

				//determine target tab
				var tabName=(target.tagName=='SPAN')
                ? $(target).text()
                : $(target).find('span').text()
				bus.$emit('tab-trigger', tabName);
				this.activeTab = tabName;
			}
		 }
	}
</script>
<style type="scss">
	.alive {
		background-color: #d3d3d3;
	}
	.mouse{
		cursor: pointer;
	}
</style>