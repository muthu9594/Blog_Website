import { useEffect, useState } from "react";

import {API} from '../../../service/api.js'

//mui
import { Box,Grid } from "@mui/material";

//components
import Post from "./Post.js";

import { useSearchParams , Link } from "react-router-dom";



const Posts = () =>{
    const [posts,setPosts]=useState([]);

    const [searchParams]=useSearchParams();
    const category =searchParams.get('category');

    useEffect(()=>{
        const fetchData=async()=>{
        let response = await API.getAllPosts({category: category || ''});
        if(response.isSuccess){
            setPosts(response.data);
         }
        }
        fetchData();
    },[category])
    const image = "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg";
    return(
        <>
        {
            posts && posts.length > 0 ? posts.map(post =>(
                <Grid item lg={3} sm={4} xs={12}>
                    <Link to={`details/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>
                    <Post post={post} image={image}/>
                    </Link>
                    
                </Grid>
                   
            )) : <Box style={{color:'#878787', margin: '30px 80px', fontSize:18}}> No data available to display</Box>
        }
        </>
    )

}

export default Posts;