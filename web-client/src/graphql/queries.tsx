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

export const getTenants = `
query GetTenants {
  getTenant(tenantId: "") {
    name
    tenantId
  }
}
`