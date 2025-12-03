import React from 'react';
import Question7 from '../Components/Question7.jsx'; // ✅ default import

function Question7p() {
  const showalert = () => {
    alert('Hello From Parent Component🙋‍♂️');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-4">Parent Component</h2>
      <Question7 showalert={showalert} />
    </div>
  );
}

export default Question7p;
