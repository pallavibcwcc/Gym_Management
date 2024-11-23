import { useState } from "react"
import '../Styles/Login.css'
import Button from '@mui/material/Button';
 
 
 const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[isRegsitered,SetIsReRegsitered]=useState(false);
    const[isLogin,setLogin]=useState(false);
    const[users,setUsers]=useState([]);
    const hadleauthentication = () => {
        if(isRegsitered){
            if(isRegsitered){
                const user = users.find((u)=>u.email === email && u.password === password);
                if(user){
                    setLogin(true);
                }
                else{
                    alert('Login Failed,Please Check Your credentials')
                }
            }

        }else{
            //register
            const newUser = {email,password};
            setUsers([...users,newUser]);
            localStorage.setItem('users',JSON.stringify([...users,newUser]));
            setLogin(true);

        }
    }

    const handlelogout = () => {
        setLogin(false);
        setEmail('');
        setPassword('');

    }
    return(
     
        <div className="mystyle">
           
        <div className="Login-box">
            {
                isLogin ? (
                    <div className="Box-outline">
                        <h6>
                           Welcome,<br></br>
                           {email} !
                        </h6>
                        <Button onClick={handlelogout} variant='contained'>LogOut</Button>
                        </div>
                ):(
                    <div className="form-content">
                        <h2>{isRegsitered?'Login':'Register'}</h2>
                        <form>
    <input className="email-inp" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
    <input className="password-inp" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
   
    <Button variant='contained' onClick={hadleauthentication}>{isRegsitered?'login':'Register'}</Button>

</form>
<p>
    {isRegsitered ? "Don't have an account? Register Now" : "Already have an account Login!"}
</p>
<Button variant='contained' onClick={()=>SetIsReRegsitered(!isRegsitered)}>
    {isRegsitered?"Register" : 'login'}
</Button>
        </div>
    )
 }
                        
                    
                    </div>
                    </div>
               
                )
            }

 export default Login