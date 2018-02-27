import Vue from 'vue'
import UserQuests from '@/components/UserQuests'

describe('userQuests.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UserQuests)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.landing h1').textContent)
      .toEqual('User Quests')
  })
})
