import React from "react";
const App = () => { 
    function handleClick() {
        console.log('Click happened');
    }
    return (
    <div className="flex items-center justify-center ">
        <button onClick={handleClick} className='bg-blue-400 border-2 rounded-semi'>Submit</button>
    </div>
)  }
export default App;
 