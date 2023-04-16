
import './App.css';
import { Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Buttons from "./Layout/Outlet/UI/Buttons/Buttons";
import Inputs from "./Layout/Outlet/UI/Inputs/Inputs";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element= {<Layout/>}>
          <Route path='/buttons' element= {<Buttons/>}/>
          <Route path='/inputs' element= {<Inputs/>}/>
        </Route>
        </Routes >
    </div>
  );
}

export default App;
