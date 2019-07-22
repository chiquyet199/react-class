import React, {useState} from 'react';
import './App.css';

function App() {
  let counter = 1
  const [count, setCount] = useState(0)
  const onBtnClick = () => {
    counter = count + 1
    setCount(counter)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Child/>
        <h1>Count: {count}</h1>        
        <h2>This is static content</h2>
        <button onClick={onBtnClick}>Set Count To 1</button>
      </header>
    </div>
  );
}

const Child = function(){
  console.log('child component re-render')
  return <h1>Hello</h1>
}

export default App;
