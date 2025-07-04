import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Application from './components/Application.tsx'

import './styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application />
  </StrictMode>
)
