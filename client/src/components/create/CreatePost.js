
//mui
import { Box, styled, FormControl, Input } from "@mui/material";

//material icons
import {AddCircle as Add} from '@mui/icons-material';

const Image =styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'
});

const Container= styled(Box)`
    margin:50px 70px;
`;

const CreatePost=()=> {

    const ImageUrl='https://www.neokoncepts.com/wp-content/uploads/2015/09/our_blog_banner.jpg';
 
    return (
    
    <Container>
        <Image src={ImageUrl} alt="image" />

        <FormControl>
            <label htmlFor="fileInput" >
               <Add/>
            </label>
            <input type='file' id="fileInput" />
        </FormControl>
    </Container>
  )
}

export default CreatePost;