import React from 'react'

import { useStores } from 'stores/RootStore'

const Login: React.FC = () => {
  const { authStore } = useStores()

  return <>
    <h1>Login</h1>
    <button
        onClick={() => {
          authStore.login()
        }}
      >
        login
      </button>
  </>
}


export default Login