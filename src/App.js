import {Routes , Route} from "react-router-dom";
import Test from "./Test";
import AddItem from "./AddItem";

function App() {
  return (

   <Routes>
    <Route path="/" element={<Test/>}></Route>
     <Route path="/add-item" element={<AddItem/>}></Route>
   </Routes>
  );
}

export default App;
