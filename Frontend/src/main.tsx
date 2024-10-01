
//packages
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'

//files
import App from './App.tsx'
import { store } from './app/store.ts'

//css
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
