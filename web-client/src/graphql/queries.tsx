export const listClients = `
query ListClients {
  listClients {
    items {
      clientId
      name
    }
  }
}
`

export const getClients = `
query GetClients {
  getClient(clientId: "") {
    name
    clientId
  }
}
`