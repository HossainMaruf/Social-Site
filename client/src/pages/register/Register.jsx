import './register.css';

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Logo Here</h3>
                    <span className="loginDesc">Description goes here</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Username"/>
                        <input type="text" className="loginInput" placeholder="Email"/>
                        <input type="password" className="loginInput" placeholder="Password"/>
                        <input type="password" className="loginInput" placeholder="Confirm Password"/>
                        <button className="loginButton">Sing Up</button>
                        <button className="loginRegisterButton">Login into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
