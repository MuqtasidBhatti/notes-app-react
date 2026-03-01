import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { NotesProvider } from './context/notesContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <App />
      </NotesProvider>
    </BrowserRouter>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 5de4dc74d82a449e6fe2cbf52eeaf7e9d467afde
  </StrictMode>,
)
