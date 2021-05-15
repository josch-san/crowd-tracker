const settings = {
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
    // identityPoolId: process.env.REACT_APP_AUTH_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID,

    // oauth: {
    //   domain: "crowd-tracker-dev.auth.us-east-1.amazoncognito.com",
    //   scope: [ "openid", "email", "aws.cognito.signin.user.admin"],
    //   redirectSignIn: "http://localhost:3000/sign-in",
    //   redirectSignOut: "http://localhost:3000",
    //   responseType: "code"
    // }
  },

  API: {
    aws_appsync_region: process.env.REACT_APP_AWS_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_API_AUTHENTICATION_TYPE,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  }
}

export default settings