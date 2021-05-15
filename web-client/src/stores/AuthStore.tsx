import { makeAutoObservable } from 'mobx'

export default class AuthStore {
  user: string = 'unknown'

  constructor() {
    makeAutoObservable(this)
  }

  login = () => {
    this.user = 'josch'
  }

  logout = () => {
    this.user = 'unknown'
  }

  get isAuthenticated() {
    return this.user !== 'unknown'
  }
}