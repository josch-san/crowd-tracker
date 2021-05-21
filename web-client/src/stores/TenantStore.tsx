import { makeAutoObservable, runInAction } from 'mobx'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from "@aws-amplify/api"

import { listTenants, tryDebugger } from 'graphql/queries'


interface Paginator<T> {
  [field: string]: {
    items: [T];
    nextToken: string;
  }
}

interface Tenant {
  tenantId: string;
  name: string;
}

export default class TenantStore {
  tenants: Array<Tenant> = []

  constructor() {
    makeAutoObservable(this)
  }

  getTenant = async (tenantId: string) => {

  }

  tryDebugger = async (exampleId: string) => {

    try {
      const response = await API.graphql(graphqlOperation(tryDebugger, { exampleId }))
      console.log(response)

    } catch(error) {
      console.log(error.message)
      runInAction(() => {
        this.tenants = []
      })
    }
  }

  listTenants = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listTenants)) as GraphQLResult<Paginator<Tenant>>

      runInAction(() => {
        this.tenants = response.data?.listTenants.items as Array<Tenant>
      })

    } catch(error) {
      console.log(error.message)
      runInAction(() => {
        this.tenants = []
      })
    }
  }

  createTenant(newTenant: Tenant) {
    this.tenants.push(newTenant)
  }
}
