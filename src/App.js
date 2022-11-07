import Home from "./components/Home" //Home page
import ProfilePage from "./components/ProfilePage" // Profile page
import {Route, Routes} from "react-router-dom"
import Leyout from "./components/Leyout";
import Login from "./Login";

function App() {
  const user = null
  return (
    <>
    {!user ?
        <Login /> 
           :
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<Home />}/>
        <Route path='profile' element={<ProfilePage />}/>
      </Route>
    </Routes>
    }
    </>
  );
}

export default App;
