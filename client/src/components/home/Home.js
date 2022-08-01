
//components
import Categories from "./Categories";
import Banner from "../banner/Banner";

//mui
import { Grid } from "@mui/material";


const Home = () =>{
    return(
        <div>
            <Banner/>
            <Grid container>
                <Grid item lg={2} sm={2} xs={12}>
                    <Categories/>
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    Posts
                </Grid>
            </Grid>
            
        </div>
    )
}


export default Home;