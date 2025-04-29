import React, { useState } from 'react';


const Sample = () => {
  const [message, setMessage] = useState('');

  // const makeApiCall = () => {
  //   async function getMessage() {
  //     const result = await axios.get('/message');
  //     setMessage(result['data']);
  //   }
  //   getMessage();
  // };

  return (
    <div>
      <h1>Press the button!</h1>
      <h3>{message}</h3>
      <button>Click Me to connect to express</button>
    </div>
  );
};

export default Sample;
