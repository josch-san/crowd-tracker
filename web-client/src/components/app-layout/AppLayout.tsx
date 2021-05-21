import React from 'react'
import { observer } from 'mobx-react-lite'

import { useStores } from 'stores/RootStore'

const AppLayout: React.FC = observer(() => {
  const { authStore, tenantStore } = useStores()

  React.useEffect(() => {
    tenantStore.listTenants()

    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <h1>App Layout</h1>
      <button onClick={() => authStore.logout()}>
        logout
      </button>
      <ul>
        {tenantStore.tenants.map(tenant => <li key={tenant.tenantId}>{tenant.name}</li>)}
      </ul>
    </main>
  )
})

export default AppLayout