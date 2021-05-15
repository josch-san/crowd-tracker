import { makeAutoObservable, runInAction } from 'mobx'
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

interface UserProfile {
  email: string;
  sub: string;
  identities: string;
  email_verified: boolean;
}

export default class AuthStore {
  user: UserProfile | null = null

  constructor() {
    makeAutoObservable(this)
  }

  federatedSignin = async(provider: CognitoHostedUIIdentityProvider) => {
    await Auth.federatedSignIn({provider: provider})
  }

  verifyAuth = async() => {
    try {
      const current = await Auth.currentAuthenticatedUser()

      runInAction(() => {
        this.user = current['attributes']
      })

    } catch(error) {
      runInAction(() => {
        console.log(error)
        // this.error = error
        this.user = null
      })
    }
  }

  logout = async() => {
    try {
      await Auth.signOut()

      runInAction(() => {
        this.user = null
      })

    } catch (error) {
      console.log(error)
    }
  }

  get isAuthenticated() {
    return this.user !== null
  }
}