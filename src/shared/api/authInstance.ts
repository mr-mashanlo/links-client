import defaultInstance from './defaultInstance';

const authInstance = defaultInstance.extend( {
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        if ( response.status === 401 ) {
          await defaultInstance( 'auth/token', { method: 'get' } );
          return;
        }
        return response;
      }
    ]
  }
} );

export default authInstance;