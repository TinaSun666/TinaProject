import {useState}from 'react';
import {registerNewUser, signInWithEmail}from '../../firebase';


const Login=()=>{

    let [email, setEmail]=useState('');
    let [password, setPassword]=useState('');

    function updateEmail(event){
        setEmail(event.target.value);
        console.log(email);

    }

    function updatePassword(event){
        setPassword(event.target.value);
        console.log(password);

    }

    function registerUser(event){
        event.preventDefault();
        console.log(email,password);
        registerNewUser(email,password);
    }

    function logUserIn(event){
        event.preventDefault();
        console.log(email,password);
        signInWithEmail(email,password);

    }

    return (
        <div className="backround">
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" onChange={updateEmail}/>
                <br />
                <input type="password" placeholder="Password" onChange={updatePassword}/>
                <br />
                <input type="submit" value="Submit" onClick={logUserIn}/>
            </form>

        </div>
        <br />
        <br />
        
        {/* <div className="resgister-form">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Email" onChange={updateEmail}/>
                    <br />
                    <input type="password" placeholder="Password" onChange={updatePassword}/>
                    <br />
                    <input type="submit" value="Submit" onClick={registerUser}/>
                </form>


        </div> */}
        </div>

        
        
        
        
    )

}

export default Login;
