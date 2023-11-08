import {useEffect} from "react";
import './App.css';

function App() {

  useEffect(() =>{
    fetch('/movies')
    .then((r) => r.json())
    .then((movies) => console.log(movies));
  }, []);


  return (
    <div className="App">
     Check the console for the list of movies
    </div>
  );
}

export default App;
