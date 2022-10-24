import Header from "./Header";
import LeftsideNav from './LeftsideNav';
import { Outlet } from 'react-router-dom'

const Leyout = () => {
  return (
    <div className='App'>
      <Header />
      <LeftsideNav />
      <Outlet />
      
    </div>
  )
}

export default Leyout
