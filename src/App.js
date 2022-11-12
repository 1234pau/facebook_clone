import Home from "./components/Home" //Home page
import ProfilePage from "./components/ProfilePage" // Profile page
import {Route, Routes} from "react-router-dom"
import Leyout from "./components/Leyout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch]=useStateValue()
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
