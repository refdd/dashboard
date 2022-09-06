import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import {ContextProvider} from "../src/contexts/ContextProvider"
import {registerLicense} from "@syncfusion/ej2-base";
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJW3xAYVF2R2FJfFR0dV9GZEwgOX1dQl9hSXtSdkVgXX5cc3NWTmk=');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>
  
);


