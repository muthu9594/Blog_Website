import axios from 'axios';


//constanta api notification
import { API_NOTIFICATION_MESSAGES } from '../constants/config.js';

const API_URL= 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        //stop global loader here
        return processResponse(response);
    },
    function (error){
        //stop global loader here
        return Promise.reject(processError(error));
    }
)



/////////////////////////////
// if success  ->  return {isSuccess:true , data:object}
// if fail     -> return(isFailure:true,status: string,msg:string,code:int)
///////////////////////////// 
const processResponse = (response)=>{
    if(response?.status === 200){
        return {isSucess:true, data: response.data}
    }else{
        return{
            isFailure: true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code 
        }
    }
}


/////////////////////////////
// if success  ->  return {isSuccess:true , data:object}
// if fail     -> return(isFailure:true,status: string,msg:string,code:int)
///////////////////////////// 
const processError =(error)=>{
    console.log('ERROR IN RESPOMSE',error.toJSON());
    if(error.response){
        //request made and server responded with a status other
        //that falls out of the range 2.x.x
        return{
        isError: true,
        msg: API_NOTIFICATION_MESSAGES.responseFailure,
        code:error.response.status
    }
}else if(error.request){
        //Request made but no response was received
        console.log('ERROR IN REQUEST:', error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
        }
    }else{
        //something happened in setting up request tht triggers an error
        console.log('ERROR IN NETWORK',error.toJSON());
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code:""
        }
    }
}