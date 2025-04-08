import React, { useState } from 'react';
import axios from 'axios';

const Predict=()=> {
  const [result, setResult] = useState(null);

  const handlePrediction = async () => {
    try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch('http://localhost:3000/Reviews', {
          signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }
      // Make a request to the Node.js backend
      const response1 = await axios.post('/Home/predict', data);

      // Process the response
      const predictionResult = response1.data;

      // Update the UI with the result
      setResult(predictionResult);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Frontend React App</h1>
      <button onClick={handlePrediction}>Predict</button>
      {result && <p>{result}</p>}
    </div>
  );
}
export default Predict;