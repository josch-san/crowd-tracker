import React from 'react'

import { useStores } from 'stores/RootStore'

const AppLayout: React.FC = () => {
  const { authStore } = useStores()
  return (
    <main>
      <h1>App Layout</h1>
      <button onClick={() => authStore.logout()}>
        logout
      </button>
    </main>
  )
}

export default AppLayout