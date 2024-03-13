import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopUp = ({closePopUp}) => {
    // const [hidden, setHidden] = useState(false); // Control visibility with state

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/login");
    };

    // const handleClose = () => {
    //     setHidden(true); // Hide pop-up when cancel is clicked
    // };

    // if (hidden) return null; // Don't render anything if hidden is true

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className="bg-white p-8 rounded-md w-96">
                <h2 className="text-xl font-bold mb-4">Login to proceed Payment</h2>
                <div className='flex justify-between'>
                    <button onClick={closePopUp} className='bg-white bg-opacity-70 px-2 py-1 border'>Cancel</button>
                    <button onClick={handleNavigate} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopUp;
