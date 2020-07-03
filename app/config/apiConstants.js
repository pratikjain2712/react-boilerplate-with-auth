// Structure

/* eslint-disable no-unused-vars */
const MockApiConstants = {
  moduleName: {
    apiName: {
      apiConfig: {
        url: '/api/policymgmt/updatePolicy/{policyRefId}',
        method: 'POST',
      },
      config: {
        pathVariables: {
          policyRefId: '', // Value to be set in the component
        },
        urlParams: {
          sampleParamKey: '', // Key value to be set in the component
        },
        headers: {
          sampleParamKey: '', // Key value to be set in the component
          // Authorization: ' ',
        },
      },
      attachPrefix: true,
      skipAuth: false, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
  },
};
/* eslint-enable no-unused-vars */

const ApiConstants = {
  Auth: {
    getAuthentication: {
      apiConfig: {
        url: '/user/authenticate',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
    getLogout: {
      apiConfig: {
        url: '/user/logout',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
    checkAuth: {
      apiConfig: {
        url: '/user/authenticate/cookie',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
  },
  Tool: {
    getRepo: {
      apiConfig: {
        url: '/users/{username}/repos?type=all&sort=updated',
        method: 'GET',
      },
      config: {
        pathVariables: {
          username: '', // Value to be set in the component
        },
      },
      attachPrefix: true,
      skipAuth: true, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
  },
};

export default ApiConstants;
