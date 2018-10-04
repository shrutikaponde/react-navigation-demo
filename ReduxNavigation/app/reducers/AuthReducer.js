const initialAuthState = { isLoggedIn: false };

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
    console.log('====================================login auth reducer')
      return { ...state, isLoggedIn: true };
    case 'Logout':

    console.log('logout auth reducer')
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}