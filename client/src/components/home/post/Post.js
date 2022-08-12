
//mui
import { Box , Typography,styled} from "@mui/material";



//utils
import { addElipsis } from "../../../utils/common-utils";

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius:10px;
    margin:10px;
    height:350px;
    display:flex;
    align-items:center;
    flex-direction:column;  
     & > p {
        padding:0 5px 5px 5px;
    }
`;

const Image =styled('img')({
    width:'100%',
    borderRadius:'10px 10px 0 0',
    objectFit:'cover',
    height:'150'
})

const Text =styled(Typography)`
    color:#878787;
    font-size:12px;
`;

const Heading =styled(Typography)`
    font-size:18px;
    font-weight:600;
`;

const Details =styled(Typography)`
 font-size:14px;
 word-break:break-word;
`;

const Post = ({post,image}) =>{
    
    return(
    <Container>
        <Image src={post.picture || image } alt="blog"/>
        <Text>{post.categories}</Text>
        <Heading>{addElipsis(post.title,20)}</Heading>
        <Text>{post.username}</Text>
        <Details>{addElipsis(post.description,100)}</Details>
    </Container>
    )
}

export default Post;