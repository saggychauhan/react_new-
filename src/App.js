import './App.css';
import Nav from './components/Nav';
import'./style.css';
import Webview from './components/Webview';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  const obj={name:"raghav" ,age:20,salary:30000}
  return (
    <>
    <Nav tittle="my pro" tat="home" searchbar={false}/>
    <Webview doler={false} inr={false} data={obj}/>
    
  
  </>
  );
}

export default App;
