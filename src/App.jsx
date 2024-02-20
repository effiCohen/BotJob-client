import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from './componentsAdmin/layoutAdmin'
import LoginAdmin from './componentsAdmin/loginAdmin'
import UserListAdmin from './componentsAdmin/userListAdmin'
import LogoutAdmin from './componentsAdmin/logoutAdmin'
import LayoutClient from './componentsClient/layoutClient'
import LogInClient from './componentsClient/logInClient'
import SignUpClient from './componentsClient/signUpClient'
import HomeClient from './componentsClient/homeClient'
import LogoutClient from './componentsClient/logoutClient'
import Page404 from './componentsClient/Page404'
import ValidationClient from './componentsClient/validationClient';
import Welcome from './componentsClient/welcome';
import ForgotClient from './componentsClient/Forgot';
import ResatPasswordClient from './componentsClient/ResatPassword';

function App() {

  return (
    <BrowserRouter>
                 <Routes>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<LoginAdmin />} />
                    <Route path='/admin/users' element={<UserListAdmin />} />
                    <Route path='/admin/logout' element={<LogoutAdmin />} />
                </Route>

                <Route path="/" element={<LayoutClient />}>
                    <Route index element={<Welcome />} />
                    <Route path="/login" element={<LogInClient />} />
                    <Route path="/signup" element={<SignUpClient />} />
                    <Route path="/validation" element={<ValidationClient />} />
                    <Route path="/home" element={<HomeClient />} />
                    <Route path="/logout" element={<LogoutClient />} />
                    <Route path='welcome' element={<Welcome/>} />
                    <Route path="/forgot" element={<ForgotClient />} />
                    <Route path='resatpassword'element={<ResatPasswordClient />} />


                    <Route path="/*" element={<Page404 />} />
                </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
