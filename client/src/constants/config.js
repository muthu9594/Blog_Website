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
    userLogin:{url:'/login',method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'create',method:'POST'},
    getAllPosts:{url:'/posts',method:'GET',params:true},
    getPostById:{url:'post',method:'GET',query:true},
    updatePost:{url:'update',method:'PUT',query:true},
    deletePost:{url:'delete',method:'DELETE',query:true},
    newComment:{url:'/comment/new',method:'POST'},
    getAllComments:{url: 'comments',method:'GET',query:true},
    deleteComment:{url:'comment/delete', method:'DELETE',query:true}
}