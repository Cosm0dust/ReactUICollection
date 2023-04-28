
import './App.css';
import { Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Buttons from "./Layout/Outlet/UI/Buttons/Buttons";
import Inputs from "./Layout/Outlet/UI/Inputs/Inputs";
import PopularQuestions from "./Layout/Outlet/PopularQuestions/PopularQuestions";
import Snippets from "./Layout/Outlet/Snippets/Snippets";
import UIcollection from "./Layout/Outlet/UI/UIcollection";
import TextAreas from "./Layout/Outlet/UI/TextAreas/TextAreas";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element= {<Layout/>}>
          <Route path='ui' element={<UIcollection/>}>
            <Route path='buttons' element= {<Buttons/>}/>
            <Route path='inputs' element= {<Inputs/>}/>
            <Route path='textareas' element= {<TextAreas/>}/>
          </Route>
          <Route path='snippets' element={<Snippets/>} >

          </Route>
          <Route path='cribs' element={<PopularQuestions/>} >

          </Route>


        </Route>
        </Routes >
    </div>
  );
}

export default App;
