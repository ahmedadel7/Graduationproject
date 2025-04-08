from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import CountVectorizer
import tensorflow as tf
import pickle
import numpy as np
app = Flask(__name__)
responses={0:'Negative',1:"Neutral",2:"Positive"}
input_list=[]
# Load your trained AI model
try:
    model = pickle.load(open('model.pkl', 'rb'))
    print("Model loaded successfully!")
except Exception as e:
    print("Error loading the model:", str(e))

try:
    Vocabulary = pickle.load(open('vocabulary.pkl', 'rb'))
    print("vocabulary loaded successfully!")
except Exception as e:
    print("Error loading the vocabulary:", str(e))


@app.route('/', methods=['POST'])
def predict():
    try:
    # Retrieve data from the request
        data = request.get_json()
        
        print(data)
    except Exception as e:
     print (str(e))
    # Print the data to inspect its structure and format
    print("Received data:", data['input'])
    cv = CountVectorizer(vocabulary=Vocabulary)
    # Preprocess the input data
    if input_list==[]:
        input_list.append(str(data['input']))
        print(input_list)
    else: 
        input_list.pop(0)
        input_list.append(str(data['input']))
    new_X = cv.transform(input_list).toarray()
    # Perform inference with your AI model
    # print(new_X)
    result = model.predict(new_X)
    print(result)
    try:
        # print(str(responses[result[0]]))
        return str(responses[result[0]])  
        
    except Exception as e:
      return "invalid prediction"
    # Return the prediction as a response

if __name__ == '__main__':
    app.run()
