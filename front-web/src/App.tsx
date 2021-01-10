import './App.css';
import Hello from './Hello';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Hello message="David"/>
      <Hello message="Fatiélia"/>  
      <Counter /> 
    </div>
  );
}

export default App;
