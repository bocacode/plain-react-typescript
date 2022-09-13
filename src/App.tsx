import './App.css'
import Hello from './components/Hello'
import Form from  './components/Form'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Hello firstName='jonathan' lastName='Sanchez' />
        <Form /> 
      </header> 
    </div>
  )
}

export default App
