import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';


const SigninForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Customers/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Cannot login please try again");
      } 

      // invoke the login function in our auth context
      authContext.login(data._id, data.username, data.jwt,data.type);
      const CustomerID = data.username;
    
      sessionStorage.setItem("CustomerID", CustomerID);
      
      // navigate to the home page
      
     navigate(`/Customers/Home`);
      
     
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      
      onSubmit={handleSubmit(submitHandler)}
    >
      <div class='sign-in'>
      <div class="format">
      <h2 class='Title'>Sign in</h2>
      <div class="content">
      <TextInput
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Username must not be empty.</FormInputError>
      )}

      <TextInput
        label="Password"
        type="password"
        name="password"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Password must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        class="button"

      >
        Sign in
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/f5/9f/8a/f59f8a9dfc9c1e5a9e0f90559c1ee382.jpg" class="sign-in-photo"></img>
     
      </div>
    </form>
  );
};

export default SigninForm;
