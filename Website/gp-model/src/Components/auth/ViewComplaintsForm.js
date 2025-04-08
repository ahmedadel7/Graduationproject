import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const ViewAllComplaints = (props) => {

//   const navigate = useNavigate();
//   const params = useParams();
//   // our dynamic segment was called productId, so we can access it as follows:
//   const ComplaintId = params.ComplaintId;
//     const fetchAbortController = new AbortController();
//     const fetchSignal = fetchAbortController.signal;
//   const DeleteComplaint = async () => {
//     //navigate(`/Viewpropertiesup/${props.product._id}`);
//     try {
//       const response = await fetch(`http://localhost:3000/Complaint/${ComplaintId}`, {
//         method: 'Delete',
//         headers: {
//           'Content-Type': 'application/json'
//         },
      
//       });
      
//     navigate(`/Admin/ViewComplaints`);
//     if (!response.ok) {
//       throw Error('error');
//     }
   
//   } catch (err) {
//     console.log(err.message);
//   }
//   }
//   DeleteComplaint(); 
// return () => {
//   fetchAbortController.abort();
// }, [ComplaintId];

  return (
    <div className='ReviewCard'>
    
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    <figcaption class="flex items-center justify-center space-x-3">
        <img class="rounded-full w-9 h-9" src="https://www.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg" alt="profile picture"/>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
            <div><h4>{props.Complaint.userName} </h4></div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
  
 
</div>
</figcaption>
  

 
  </figure>
 
  <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
        
        <h4>{props.Complaint.email}</h4>
  </blockquote>
  </figure>
  <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white" >Complaint_Description</h3>
        
        <h4>{props.Complaint.description}</h4>
  </blockquote>
  </figure>
  <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white" >Complaint_Result</h3>
        
        <h4>{props.Complaint.prediction}</h4>
  </blockquote>
  </figure>
  
  <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        
        <button className='button'>Delete</button>
        
  </blockquote>
  </figure>
  
   

    </div>

 
    
    
  );
  
};
export default ViewAllComplaints;
