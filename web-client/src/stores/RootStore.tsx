import React from 'react'

import UiState from 'stores/UiState'
import AuthStore from 'stores/AuthStore'
import ClientStore from 'stores/ClientStore'


export default class RootStore {
  uiStore: UiState
  authStore: AuthStore
  clientStore: ClientStore

  constructor() {
    this.uiStore = new UiState()
    this.authStore = new AuthStore()
    this.clientStore = new ClientStore()
  }
}

const StoresContext  = React.createContext<RootStore>(new RootStore())
const useStores = () => React.useContext(StoresContext)

const StoreProvider: React.FC<{store: RootStore}> = ({store, children}) => {
  return <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
}

export { RootStore, StoreProvider, useStores }