import Home from './pages/home/Home';
import Topbar from './comp/topbar/TopBar.jsx'
import Detail from './pages/detailpages/Detail';
import Write from './pages/form/Write';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import React  from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = false;
 
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/write' element={<Write/>}/>
          <Route path="/route/list" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />}/> 
          <Route path="/write" element={<Write />}/>  
          <Route path="/login" element={user ? <Home /> : <Settings/>}/>
          <Route path="/settings" element={user ? <Home /> : <Login /> }/>  
      </Routes>
    </BrowserRouter>
)
}
export default App;
