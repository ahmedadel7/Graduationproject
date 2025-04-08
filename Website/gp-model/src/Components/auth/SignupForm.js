import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Customers/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      navigate('/Customers/signin');
      if (!response.ok) {
        throw Error(data.error);
      }
     
    } catch (err) {
      console.log(err.message);
    }
    
  };

  return (
    <div class='sign-up'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='Tsignup'>Sign up</h2>
      <div class="content1">
       <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Name must not be empty</FormInputError>
      )}
      <TextInput
        label="UserName"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>UserName must not be empty</FormInputError>
      )}
      <TextInput
        label="Email"
        type="text"
        name="email"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.name && (
        <FormInputError>Email must not be empty</FormInputError>
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
       <TextInput
        label="Address"
        type="text"
        name="Address"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Address must not be empty.</FormInputError>
      )}
       <TextInput
        label="DOB"
        type="text"
        name="DOB"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>DOB must not be empty.</FormInputError>
      )}
       <TextInput
        label="Gender"
        type="text"
        name="gender"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.username && (
        <FormInputError>Gender must not be empty.</FormInputError>
      )}
      
      <button
        type="submit"
        class="button"
      >
        Signup
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg" class="sign-up-photo"></img>
     
      
    </form>
    </div>
  );
};

export default SignupForm;
