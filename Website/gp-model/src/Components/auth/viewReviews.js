import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import CardActions from '../../UI/card/CardActions';
import { useNavigate } from 'react-router-dom';


const ViewAllReviews = (props) => {

  const navigate = useNavigate();
  
//   const editFlight = async () => {
//     //navigate(`/Viewpropertiesup/${props.product._id}`);
//     navigate(`/editflight/${props.flights._id}`);
// }; 
const result=sessionStorage.getItem("result")
const styleObject = {
  marginTop: '40px'
};
  return (
   
      
    <div className='ReviewCard'>
    
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src="https://www.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg" alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div><h4>{props.Review.username} </h4></div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
      
     
</div>
</figcaption>
      
    
     
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
            
            <h4>{props.Review.email} </h4>
      </blockquote>
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
            
            <h4>{props.Review.company} </h4>
      </blockquote>
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white" >Review_Description</h3>
            
            <h4>{props.Review.Review_Description} </h4>
      </blockquote>
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">ReviewContent</h3>
            
            <h4>{props.Review.Prediction} </h4>
      </blockquote>
      </figure>
      
       
    
        </div>

     
      
  
    
  );
  
};
export default ViewAllReviews;