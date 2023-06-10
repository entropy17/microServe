import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [fastapiTimestamp, setFastapiTimestamp] = useState('');
  const [nodeTimestamp, setNodeTimestamp] = useState('');

  useEffect(() => {
    const fetchTimestamps = async () => {
      try {
        const responseFastapi = await axios.get('http://localhost:8000/api/fastapi-timestamp');
        setFastapiTimestamp(responseFastapi.data.timestamp);

        const responseNode = await axios.get('http://localhost:8001/api/node-timestamp');
        setNodeTimestamp(responseNode.data.timestamp);
      } catch (error) {
        console.error('Error fetching timestamps:', error);
      }
    };

    fetchTimestamps();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Welcome to My Web App!</h1>
      <h2>API Timestamps:</h2>
      <div className='message'>FastAPI Timestamp: {fastapiTimestamp}</div>
      <div className='message'>Node.js Timestamp: {nodeTimestamp}</div>
    </div>
  );
};

export default App;

