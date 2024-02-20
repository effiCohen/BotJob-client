import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from './componentsAdmin/layoutAdmin'
import LayoutClient from './componentsClient/layoutClient'
import LogInClient from './componentsClient/logInClient'
import SignUpClient from './componentsClient/signUpClient'
import HomeClient from './componentsClient/homeClient'
import LogoutClient from './componentsClient/logoutClient'
import Page404 from './componentsClient/Page404'
import ValidationClient from './componentsClient/validationClient';
import Welcome from './componentsClient/welcome';
import PasswordValid from './componentsClient/passwordValid';
import RestPassword from './componentsClient/restPassword';
import ForgotPass from './componentsClient/forgotPass';
import Setting from './componentsClient/Setting';
import DashboardAdmin from './componentsAdmin/dashboardAdmin';
import InterviewAdmin from './componentsAdmin/interviewAdmin';
import QuestionAdmin from './componentsAdmin/QuestionAdmin';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path='/admin/interview' element={<InterviewAdmin />} />
          <Route path='/admin/question' element={<QuestionAdmin />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Welcome />} />
          <Route path="/signup" element={<SignUpClient />} />
          <Route path="/validation" element={<ValidationClient />} />
          <Route path="/login" element={<LogInClient />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/home" element={<HomeClient />} />
          <Route path="/logout" element={<LogoutClient />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/passwordValidation" element={<PasswordValid />} />
          <Route path="/restpass" element={<RestPassword />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes