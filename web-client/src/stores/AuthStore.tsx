import { makeAutoObservable } from 'mobx'

class AuthStore {
  user: string = 'unknown'

  constructor() {
    makeAutoObservable(this)
  }

  login = () => {
    this.user = 'josch'
  }

  get isAuthenticated() {
    return this.user !== 'unknown'
  }
}

export default AuthStore