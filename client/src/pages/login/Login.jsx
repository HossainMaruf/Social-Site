import './login.css';

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Logo Here</h3>
                    <span className="loginDesc">Description goes here</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Email"/>
                        <input type="password" className="loginInput" placeholder="Password"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
