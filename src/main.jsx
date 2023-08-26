import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContext from './context/TodoContext.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContext.Provider> 
  <App />
  <TodoContext.Provider/> 28

)
