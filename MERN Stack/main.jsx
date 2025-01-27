import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import GetMovie from './components/GetMovie.jsx'
import PostMovie from './components/PostMovie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Component1 />
    <Component2 /> */}
    <PostMovie />
    <GetMovie />
  </StrictMode>,
)
