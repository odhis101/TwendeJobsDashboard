import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumberSubmitted, setPhoneNumberSubmitted] = useState(false);
  const [otpCodeSubmitted, setOtpCodeSubmitted] = useState(false);

  const handlePhoneNumberSubmit = (event) => {
    event.preventDefault();
    // Send OTP code to the provided phone number
    // Display the OTP code form
    fetch(`http://localhost:5000/messages/sendOtp`, {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: phoneNumber
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      /*
      setIsEnabled(true);
      toast.info('OTP sent successfully, Please check your phone ')
      setIsSubmitting(false);
      */
      setPhoneNumberSubmitted(true);
    })
    .catch(error => {
      console.error(error);
    
    });
  };

  const handleOtpCodeSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/verifyOtpForNewAdmin`, {
      method: 'POST',
      body: JSON.stringify({
      phoneNumber: phoneNumber, // Assuming you have stored the user's phone number somewhere
        otp: otpCode
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      if (data.message === 'OTP verification successful') {
        setOtpCodeSubmitted(true);
        console.log('sent succesfully')
        
      } else {
       console.log(data.message)
      }
    })
    .catch(error => {
      console.error(error);
    });
 
  };

  const handleNewPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/users/updatePasswordAdmin`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword, phoneNumber }),
        }) 
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);
          if (data.message === 'Password updated successfully') {
           
           // dispatch(login(userData))
            //navigate('/login')
            console.log('success')
  
  
          } else {
          
            //toast.error(data.message);
            console.log(data.message)
          }
      
        })
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: '25rem' }}>
        <div className="card-body">
          <h5 className="card-title mb-4">Forgot Password</h5>

          {/* Phone number form */}
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          {/* OTP code form */}
          <form onSubmit={handleOtpCodeSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="otpCode">OTP Code</label>
              <input type="text" className="form-control" id="otpCode" value={otpCode} onChange={(e) => setOtpCode(e.target.value)} disabled={!phoneNumberSubmitted} />
            </div>
            <button type="submit" className={`btn btn-primary ${!phoneNumberSubmitted ? 'disabled' : ''}`}>Submit</button>
          </form>

          {/* New password form */}
          <form onSubmit={handleNewPasswordSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="newPassword">New Password</label>
              <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} disabled={!otpCodeSubmitted} />
            </div>
            <button type="submit" className={`btn btn-primary ${!otpCodeSubmitted ? 'disabled' : ''}`}>Submit</button>
          </form>
        </div>

        <Link to="/" className="text-decoration-none text-reset py-4">change your mind ?</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
