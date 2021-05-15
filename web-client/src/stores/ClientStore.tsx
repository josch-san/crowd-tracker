import { makeAutoObservable } from 'mobx'

interface Client {
  clientId: string;
  name: string;
}

export default class ClientStore {
  clients: Array<Client> = []

  constructor() {
    makeAutoObservable(this)
  }

  createClient(newClient: Client) {
    this.clients.push(newClient)
  }
}
