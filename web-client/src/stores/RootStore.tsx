import React from 'react'

import UiState from 'stores/UiState'
import AuthStore from 'stores/AuthStore'
import TenantStore from 'stores/TenantStore'


export default class RootStore {
  uiStore: UiState
  authStore: AuthStore
  tenantStore: TenantStore

  constructor() {
    this.uiStore = new UiState()
    this.authStore = new AuthStore()
    this.tenantStore = new TenantStore()
  }
}

const StoresContext  = React.createContext<RootStore>(new RootStore())
const useStores = () => React.useContext(StoresContext)

const StoreProvider: React.FC<{store: RootStore}> = ({store, children}) => {
  return <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
}

export { RootStore, StoreProvider, useStores }