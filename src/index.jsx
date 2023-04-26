import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './redux/config/store';
import { AuthContextProvider } from './context/context';
import { ProfileDataContextProvider } from './context/ProfileInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileDataContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProfileDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
