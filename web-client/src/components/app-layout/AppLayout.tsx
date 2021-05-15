import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStores } from 'stores/RootStore'

const AppLayout: React.FC = observer(() => {
  const { authStore, clientStore } = useStores()

  React.useEffect(() => {
    clientStore.listClients()

    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <h1>App Layout</h1>
      <button onClick={() => authStore.logout()}>
        logout
      </button>
      <ul>
        {clientStore.clients.map(client => <li key={client.clientId}>{client.name}</li>)}
      </ul>
    </main>
  )
})

export default AppLayout