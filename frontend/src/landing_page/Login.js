import React, { useState, useEffect } from "react";
import axios from "axios";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        axios.get(
            "http://localhost:3002/allHoldings",
            {
                withCredentials: true
            }
        )

        .then(res => {

            if(res.data.status !== false){
                setIsLoggedIn(true);
            }
        })

        .catch(() => {
            setIsLoggedIn(false);
        });

    }, []);

    const handleLogin = async () => {
        try{
            const res = await axios.post(
                "http://localhost:3002/auth/login",
                { email, password },
                { withCredentials: true }
            );

            if(res.data.msg === "Login success"){
                window.location.href = "http://localhost:3001";
            } else {
                setError(res.data.msg);
            }

        } catch(err){
            setError("Something went wrong");
        }
    };

    return (

        isLoggedIn ? (

            <div
                style={{
                    textAlign: "center",
                    marginTop: "120px"
                }}
            >

                <h2
                    style={{
                        color: "#387ed1",
                        marginBottom: "20px"
                    }}
                >
                    You are logged in
                </h2>

                <button

                    onClick={() => {
                        window.location.href = "http://localhost:3001";
                    }}

                    style={{
                        padding: "12px 30px",
                        border: "none",
                        background: "#387ed1",
                        color: "#fff",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Go to Dashboard
                </button>

            </div>

        ) : (

            <div className="login-container">
                <div className="login-card">

                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Login to your account</p>

                    {error && <p className="login-error">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button className="login-btn" onClick={handleLogin}>
                        Login
                    </button>

                </div>
            </div>

        )
    );
}

export default Login;