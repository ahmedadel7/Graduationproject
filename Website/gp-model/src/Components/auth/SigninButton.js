import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';

// import SiginForm from './SiginForm';

const SigninButtons = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async () => {
   navigate(`/Customers/signin`);
  };
  const submitHandler1 = async () => {
    navigate(`/Admins/signin`);
   };

  return (
   <div>
    <button
      class ="cardButton1"
      onClick={submitHandler}
    >
     User 
    </button>
    <button
      class ="cardButton2"
      onClick={submitHandler1}
    >
      Admin
    </button>
    </div>
  );
};

export default SigninButtons;
