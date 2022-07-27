import { useState } from 'react';

import {Box,TextField,Button,styled,Typography} from '@mui/material'

//API
import { API } from '../../service/api.js';


const Component = styled(Box)`
    width: 350px;
    margin: auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    `;

const Image = styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
});    


const Wrapper= styled(Box)`
    padding: 25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button , & > p{
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height:48px;
    border-radius: 2px; 
`;

const SignUpButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height:48px;
    border-radius: 2px; 
    box-shadow: 0px 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px
`;

const Error = styled(Typography)`
    font-size:10px,
    color: #ff6161,
    line-height: 0;
    margin-top: 10px,
    font-weight:600
`;

const loginInitialValues={
    username:'',
    password:''
};

const signupInitialValues={
    name:'',
    username:'',
    password:''
};


const Login = ()=>{

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    
    const [account,toggleAccount]=useState('login');
    const [signup,setSignup]=useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const [error,setError]=useState('');
    
    //toggeling signup and login page
    const toggleSignUp = () =>{
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');      
    };

    //setting the input values for signup
    const onInputChange = (e) =>{
      
        setSignup({...signup,[e.target.name] : e.target.value}); 
    };


    //sending data to backend
    const signupUser = async()=>{
        let response = await API.userSignup(signup);
        if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        }else {
            setError("Something went Wrong,Please try again later");
        }
    }


    //getting the input values from login to login the user
    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]:e.target.value});
    }

    //sending data by clicking the login button
    const loginUser =async () =>{
        let response = await API.userLogin(login);
        if(response.isSuccess){
                setError('');
                sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
        }else{
            setError("Something went wrong please try again later");
        }
    }



    return(
        <Component>
            <Box>
                <Image src={imageURL} alt="login" />
                {
                    account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name="username" label="Enter username"/>
                        <TextField variant="standard" value={login.password } onChange={(e)=>onValueChange(e)} name="password" label="Enter password"/>
                             {error && <Error>{error}</Error>}
                        <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
                        <Text style={{textAlign:`center`}}>OR</Text>
                        <SignUpButton onClick={()=>toggleSignUp()}>Create an account</SignUpButton>
                    </Wrapper>
                :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter Name"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/> 
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/> 
                        
                        {error && <Error>{error}</Error>}

                        <SignUpButton onClick={()=>signupUser()}>SignUp</SignUpButton>
                        <Text style={{textAlign:`center`}}>OR</Text>
                        <LoginButton variant="contained" onClick={()=>toggleSignUp()}>Already have an account</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}



export default Login;