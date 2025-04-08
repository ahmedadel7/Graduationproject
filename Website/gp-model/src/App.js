import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import Layout from './UI/layout/Layout';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import AddReviewPage from './pages/AddReviewPage';
import AdminSignin from './pages/AdminLoginPage';
import CustomerPage from './pages/CustomerLoginPage';
import HomePage from './pages/HomePage';
import ComplaintPage from './pages/ComplaintPage';
import ComplaintsList from './pages/ViewAllComplaints';
import CHomePage from './pages/CustomerHome';
import Logout from './pages/Logout';
import AdminViewReviews from './pages/AdminHome';
function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signin" element={<SigninPage />} />
          <Route path="/Customers/signin" element={<CustomerPage />} />
          <Route path="/Customers/Home" element={<CHomePage />} />
          <Route path="/Customers/signup" element={<SignupPage />} />
          <Route path="/Customers/Addreviews" element={<AddReviewPage />} />
          
          <Route path="/Admins/signin" element={<AdminSignin />}></Route>
          <Route path="/Customers/AddComplaints" element={<ComplaintPage/>}></Route>
          <Route path="/Admin/ViewComplaints" element={<ComplaintsList/>}></Route>
          <Route path="/Admin/Reviews" element={<AdminViewReviews />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </AuthProvider>

  );
}

export default App;
