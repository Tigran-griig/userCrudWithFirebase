export const SIGN_UP = 'SIGN_UP'; // POST
export const SIGN_IN = 'SIGN_IN'; // POST
export const SIGN_IN_WITH_TOKEN = 'SIGN_IN_WITH_TOKEN'; // POST
export const ADMIN_GET_USERS = 'ADMIN_GET_USER'; // GET
export const ADMIN_CREATE_USER = 'ADMIN_CREATE_USER'; // POST
export const ADMIN_UPDATE_USER = 'ADMIN_UPDATE_USER'; // PUT
export const ADMIN_DELETE_USER = 'ADMIN_DELETE_USER'; // DELETE

export const ENDPOINT_URLS = {
  [SIGN_UP]: (apiKey: string) => `accounts:signUp?key=${apiKey}`,
  [SIGN_IN]: (apiKey: string) => `accounts:signInWithPassword?key=${apiKey}`,
  [SIGN_IN_WITH_TOKEN]: (apiKey: string) => `accounts:lookup?key=${apiKey}`,
  [ADMIN_GET_USERS]: () => `api/users`,
  [ADMIN_CREATE_USER]: () => `api/users/add`,
  [ADMIN_UPDATE_USER]: (id: string) => `api/users/${id}`,
  [ADMIN_DELETE_USER]: (id: string) => `api/users/${id}`,
};