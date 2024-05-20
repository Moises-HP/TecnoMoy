import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Providers } from './Providers.jsx'

import {Provider} from "react-redux"
import store from "./store.js"

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Providers>
            <App />
        </Providers>
    </Provider>

)