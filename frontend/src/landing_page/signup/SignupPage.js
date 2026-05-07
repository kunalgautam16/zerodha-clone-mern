import React, { useState } from "react";
import axios from "axios";

function SignupPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        try{
            const res = await axios.post(
                "https://zerodha-clone-mern-backend.onrender.com/auth/signup",
                { email, password, username },
                { withCredentials: true }
            );

            if(res.data.msg === "Signup success"){
                window.location.href = "https://zerodha-clone-mern-dashboard.vercel.app";
            } else {
                setError(res.data.msg);
            }

        } catch(err){
            setError("Something went wrong");
        }
    };

    return (
        <div className="signup-container">

            {/* LEFT SIDE */}
            <div className="signup-left">
                <h1>Open your account</h1>
                <p>
                    Start investing commission-free and join thousands of users
                </p>
                <img 
                    src="media/images/signup.png" 
                    alt="illustration" 
                    className="signup-image"
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="signup-right">

                <div className="signup-card">

                    <h2>Signup now</h2>
                    <p className="subtitle">Create your Zerodha account</p>

                    {error && <p className="error">{error}</p>}

                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button onClick={handleSignup}>
                        Signup
                    </button>

                    <p className="terms">
                        By continuing, you agree to our Terms & Privacy Policy
                    </p>

                </div>

            </div>

        </div>
    );
}

export default SignupPage;