export const listTenants = `
query ListTenants {
  listTenants {
    items {
      tenantId
      name
    }
  }
}
`

export const tryDebugger = `
query TryDebugger($exampleId: String) {
  tryDebugger(exampleId: $exampleId)
}
`

export const getTenants = `
query GetTenants($tenantId: String!) {
  getTenant(tenantId: $tenantId) {
    name
    tenantId
  }
}
`