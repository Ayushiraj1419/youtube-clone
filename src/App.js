import { BrowserRouter, Route, Routes} from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import Home from './cmp/home';
import Not_Found from "./cmp/not-found/not-found";

const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element= {<Not_Found />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App