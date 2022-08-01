//API_NOTIFICATIONS

export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title:'loading..',
        message: 'Data is being loaded please wait'
    },
    success:{
        title: 'Success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        msg:'An Error occured while fetching response from the server. Please try again later'
    },
    requestFailure:{
        title:'Error',
        msg:'An Error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        msg:'Unable to connect with the server, please check internet connectivity and try again later'
    }
}


export const SERVICE_URLS= {
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'}
}