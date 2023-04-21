import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/context';
import { ProfileDataContextProvider } from './context/ProfileInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileDataContextProvider>
        <App />
      </ProfileDataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
