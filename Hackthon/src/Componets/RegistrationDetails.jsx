import React from 'react';
import "../Styles/RegistrationDetails.css";


const RegistrationDetails = () => {
    return (
        <div className="flex justify-center items-center min-h-screen RegisterDetails  ">
            <div className="text-center text-white py-10 RegisterDetails">
                <h1 className="text-4xl font-bold mb-10">REGISTRATION DETAILS</h1>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center" >
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10" >
                            <i className="fas fa-qrcode text-black text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">How to Register</h2>
                        <p>Scan the QR code</p>
                    </div>
                    <div className="text-8xl text-white ">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-dollar-sign text-black text-9xl" ></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">No Fees</h2>
                        <p>Free registration for all</p>
                        <p>Participants</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-user-graduate text-black text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">Eligibility</h2>
                        <p>Open to students and</p>
                        <p>professionals nationwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationDetails;