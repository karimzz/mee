import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Utility/NavBar';
import SideBar from './Components/Utility/SideBar';
import LoginPage from './Pages/Auth/LoginPage';
import AllUsersPage from './Pages/Users/AllUsersPage';
import NotificationPage from './Pages/Notification/NotificationPage';
import Products from './Components/Offer/Products';


function App() {

  const Auth = true ; 


  return (
    <div>

      <main>
        {Auth ? <SideBar /> : ""}
        
        <div className={`content ${!Auth ? "content-not-auth" : '' }`} style={{overflow : "hidden"}}>
          {Auth ? <NavBar />  : ""}
          
          {/* Route Here  */}
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/users' element={<AllUsersPage />} />
              <Route path='/notification' element={<NotificationPage />} />
              <Route path='/product'  element={<Products />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    
    </div>
  );
}

export default App;
