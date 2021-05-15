import { makeAutoObservable, runInAction } from 'mobx'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from "@aws-amplify/api"

import { listClients } from 'graphql/queries'

interface Paginator<T> {
  [field: string]: {
    items: [T];
    nextToken: string;
  }
}

interface Client {
  clientId: string;
  name: string;
}

export default class ClientStore {
  clients: Array<Client> = []

  constructor() {
    makeAutoObservable(this)
  }

  getClient = async (id: string) => {

  }

  listClients = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listClients)) as GraphQLResult<Paginator<Client>>

      runInAction(() => {
        this.clients = response.data?.listClients.items as Array<Client>
      })

    } catch(error) {
      console.log(error.message)
      runInAction(() => {
        this.clients = []
      })
    }
  }

  createClient(newClient: Client) {
    this.clients.push(newClient)
  }
}
