import './App.css';
import AttributesInJSX from './AttributesInJSX';
import FunctionDemo from './FunctionDemo';
import GreetingClass from './GreetingClass';
import HelloWorld from './HelloWorld';
import DemoJSX from './JsxDemo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <GreetingClass /> 
        <DemoJSX />
        <FunctionDemo />
        <AttributesInJSX />
      </header>
    </div>
  );
}

export default App;
