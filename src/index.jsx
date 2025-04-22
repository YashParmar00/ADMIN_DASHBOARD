import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2XFhhQlJHfVpdX2JWfFN0QHNfdVpyflRGcDwsT3RfQFhjTXxRd0RiUXpbdXxTQWteWA==');

import React from "react";
import ReactDOM from 'react-dom/client'; 
import './index.css'
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextProvider>    
<App />
</ContextProvider>
);
