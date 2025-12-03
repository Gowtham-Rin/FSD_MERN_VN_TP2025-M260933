import React from 'react';
function Question7({ showalert }) {
  return (
    <div>
      <h1 className='text-2xl'>Child Components</h1> {/* fixed typo */}
      <button onClick={showalert} className='mt-6 bg-blue-400 hover:bg-blue-700 transition duration-200 
      rounded-2xl border-0 px-4 py-3'>Click</button>
    </div>
  );
}

export default Question7; // ✅ default export
