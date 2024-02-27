import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
        </div>
    )
}

export default Login;