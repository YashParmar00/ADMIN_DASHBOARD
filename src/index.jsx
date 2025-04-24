import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5XdEZjUX1fc3NURWdUWkZ/');

import React from "react";
import ReactDOM from 'react-dom/client'; 
import './index.css'
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";
import { Footer } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextProvider>    
<App />
<Footer/>
</ContextProvider>
);
