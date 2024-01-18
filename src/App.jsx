import React from 'react'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <Todo/>
      </div>
    </Provider>
    
  )
}

export default App
