import React from 'react'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

import { useStores } from 'stores/RootStore'

const Login: React.FC = () => {
  const { authStore } = useStores()

  return (
    <>
      <h1>Login View</h1>
      <button onClick={() => authStore.federatedSignin(CognitoHostedUIIdentityProvider.Google)}>
        SigIn with Google
      </button>
    </>
  )
}

export default Login