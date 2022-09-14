import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import instance from "./helpers/auth";
import {initNewSession} from "./redux/auth/auth-operations";
// import { GoogleOAuthProvider } from '@moeindana/google-oauth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Kapusta_Team-Project/">
        {/* <GoogleOAuthProvider clientId="576019218839-r0qvrtbgo3utp9s4tvvgn21rv60so4c7.apps.googleusercontent.com"> */}
          <App/>
          {/* </GoogleOAuthProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

const { dispatch } = store;
const ERROR_MESSAGE = 'Invalid session';
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    if (error.response.data.message === ERROR_MESSAGE) {
      dispatch(initNewSession());
    }
    return Promise.reject(error);
  }
);
