import Vue from 'vue'
import * as ApiService from '@/service/ApiService'

describe('ApiService', () => {
  describe('ApiService.getUsers', () => {
    it('Does Method Exist?', () => {
      expect(typeof ApiService.getUsers).toEqual('function')
    })

    it('Doesnt Throw Error', () => {
      ApiService.getUsers().then((users) => {
        expect(typeof users).toEqual('array')
      }).catch((err) => {
        return err
      })
    })

    it('User Array is not empty', () => {
      ApiService.getUsers().then((users) => {
        expect(users.length).to.not.equal(0)
      }).catch((err) => {
        return err
      })
    })
  })
  describe('ApiService.getQuestsPaths', () => {
    it('should contain getQuestPaths method', () => {
      expect(typeof ApiService.getQuestPaths).toEqual('function')
    })

    it('Doesnt Throw Error', () => {
      ApiService.getQuestPaths().then((questPaths) => {
        expect(typeof questPaths).toEqual('array')
      }).catch((err) => {
        return err
      })
    })

    it('Quest Paths Array is not empty', () => {
      ApiService.getQuestPaths().then((questPaths) => {
        expect(questPaths.length).to.not.equal(0)
      }).catch((err) => {
        return err
      })
    })
  })
})
