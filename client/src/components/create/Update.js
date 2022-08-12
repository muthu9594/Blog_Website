
import { useState , useEffect , useContext} from "react";


//mui
import { Box, styled, FormControl, InputBase , Button , TextareaAutosize } from "@mui/material";

//material icons
import {AddCircle as Add} from '@mui/icons-material';

//router
import { useLocation, useNavigate , useParams} from "react-router-dom";

//context
import {DataContext} from '../../context/DataProvider'

//API
import {API} from '../../service/api.js'

const Container = styled(Box)(({theme})=>({
    margin:'50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}));

const Image =styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
});

const StyledFormControl=styled(FormControl)`
    margin-top:10px;
    display:flex;
    flex-direction:row;
`;

const InputTextField=styled(InputBase)`
    flex:1;
    margin:0 30px;
    fontSize:25px;
`;




const TextArea= styled(TextareaAutosize)`
    width:100%;
    margin-top:50px;
    font-size:18px;
    border:none;
    &:focus-visible {
        outline:none; 
    }
`;

//for story  image 
const initialPost={
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createdDate: new Date()
};



const Update=()=> { 
    const [post,setPost]=useState(initialPost);
    const [file,setFile]=useState('');

    const {account}=useContext(DataContext);

    const location=useLocation();
    const navigate=useNavigate();
    const {id}=useParams();

    //if there is picture in post.picture then show that other wise default picture
    const ImageUrl= post.picture ? post.picture : 'https://www.neokoncepts.com/wp-content/uploads/2015/09/our_blog_banner.jpg';

    useEffect(()=>{
        const fetchData=async ()=>{
           let response= await API.getPostById(id)
           if(response.isSuccess){
            setPost(response.data);
           }
        }
        fetchData();
    },[])


    useEffect(()=>{
        const getImage =async () =>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);
                
                const response=await API.uploadFile(data);
                post.picture=response.data;

            }

        }
        getImage();
        post.categories=location.search?.split('=')[1] || 'All'; 
        post.username=account.username;
    },[file])



    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    
    const updateBlogPost=async()=>{
       let response= await API.updatePost(post);
       if(response.isSuccess){
        navigate(`/details/${id}`);
       }
    }

    return ( 
    
    <Container>
        <Image src={ImageUrl} alt="image" />

        <StyledFormControl>
            <label htmlFor="fileInput" >
               <Add fontSize="large" color='action'/>
            </label>
            <input type='file' id="fileInput" style={{display:'none'}}
             onChange={(e)=>setFile(e.target.files[0])} />
            <InputTextField value={post.title} placeholder='Title'
             onChange={(e)=>handleChange(e)} name="title"/>
            <Button variant="contained" onClick={()=>updateBlogPost()}>Update</Button>
        </StyledFormControl>
        <TextArea minRows={5} placeholder="Tell your story..." 
        onChange={(e)=>handleChange(e)} value={post.description} name="description"/>
    </Container>
  )
}

export default Update;