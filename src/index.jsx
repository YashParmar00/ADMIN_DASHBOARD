import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekx0TXxbf1x1ZFNMZFlbR3BPIiBoS35Rc0VnW35feHBQRWZdUURwVEBU');
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
