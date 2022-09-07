import './App.css';
import getData from "./resources/getJasonData"
import Cards from './components/Card';
import { useState } from 'react';

function App() {
  const [response, setResponse] = useState([]);

  getData.then(value => {
    console.log(value)
    setResponse([...value.data])
  }
  ).catch(error => console.error(error))

  return (
    <div className="App">
      <header className="App-header">
        {
          response?.map(function (value) {
            return (<Cards title={value.title} id={value.id} body={value.body} />);
          })
        }
      </header>
    </div>
  );
}





export default App;
