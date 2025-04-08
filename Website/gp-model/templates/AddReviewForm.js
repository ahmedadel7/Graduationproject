import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';
import  InputField from "../../UI/form/InputField"

import axios from 'axios';
import { useRef, useState } from 'react';
const AddReviewForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
    
  
  };
  const [comment,setComment]=useState('')
  const [prediction, setPrediction] = useState();
  const [scores, setScores] = useState([]);
const formData=new FormData()
  formData.append('Review_Description',comment)
  const predictBtn = () => {
    axios.defaults.headers.common['Content-Type']='application/json'
    axios.defaults.headers.common['Accept']='application/json'
    axios.post('http://localhost:3000/Reviews',formData).then((resp)=>{
      console.log(resp)
    }).catch((error)=>{
      console.log(error)
    })
  };
  
  return (
    <div class='Review'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='Tsignup'>Review</h2>
      <div class="content1">
       <TextInput
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Username must not be empty</FormInputError>
      )}
      <TextInput
        label="Email"
        type="text"
        name="email"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>email must not be empty</FormInputError>
      )}
      <TextInput
        label="Company"
        type="text"
        name="company"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.name && (
        <FormInputError>Email must not be empty</FormInputError>
      )}

    
       <TextInput
        label="Device"
        type="text"
        name="Device"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.password && (
        <FormInputError>Device must not be empty.</FormInputError>
      )} 
     
      <div class='ReviewDes'>
      
      <InputField
        label="Review_Description"
        type="text"
        name="Review_Description"
        value={comment}
        onChange={e=>setComment(e.target.value)}
        register={register}
      
        
        validation={{ required: true }
      }
      />
      </div>
      {formState.errors.password && (
        <FormInputError>Review_Description must not be empty.</FormInputError>
      )} 
      <button
        type="submit"
        class="button"
        onClick={handleClick}
      >
        Submit
      </button>
      </div>
      </div>
      <img src="https://netinspire.co.uk/wp-content/uploads/2022/08/online-reviews.png" class="Review-photo"></img>
     
      
    </form>
    </div>
  );
};

export default AddReviewForm;
