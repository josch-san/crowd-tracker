import { Auth } from 'aws-amplify';

const settings = {
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID,

    oauth: {
      domain: process.env.REACT_APP_AUTH_USER_POOL_DOMAIN,
      scope: [ 'openid', 'email', 'profile' ],
      redirectSignIn: 'http://localhost:3000/login',
      redirectSignOut: 'http://localhost:3000',
      responseType: 'code'
    }
  },

  API: {
    aws_appsync_region: process.env.REACT_APP_AWS_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_API_AUTHENTICATION_TYPE,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    graphql_headers: async () => {
      const session = await Auth.currentSession()
      return { Authorization: session.getIdToken().getJwtToken() }
    },
  }
}

export default settings