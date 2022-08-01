
//mui
import { Box,styled,Typography } from "@mui/material";

const Image=styled(Box)`
    background:url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg') center/55% repeat-x #000;
    width:100%;
    height:50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Heading = styled(Typography)`
    font-size:68px;
    color:#fff;
    lint-height:1;

`;

const SubHeading = styled(Typography)`
    font-size:20px;
    background:#fff;

`;

const Banner = ()=>{

    return(
        <Image>
            <Heading>Blog</Heading>
            <SubHeading>Website</SubHeading>
        </Image>

    )
}

export default Banner;