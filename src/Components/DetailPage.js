import React, { useEffect,useState } from "react";
import {
  ThemeProvider,
  Grid,
  createTheme,
  CssBaseline,
  AppBar,
  Typography,
  Toolbar,
  Card,
  Box,
  CardMedia,
  CardContent,
  Container,
  CardActions
  
} from "@material-ui/core";
import data from "./Data/example_data.json";
import { AiFillStar } from "react-icons/ai";
import { Button } from "reactstrap";

const theme = createTheme();

const date = new Date();

function DetailPage(props) {


  const [searchID, setSearchnID] = useState({ });


  useEffect(() => {

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const id = params.get("id");


    const filteredHomes = data.find((x) =>
    
        x.id ===  Number(id)
  );
  setSearchnID(filteredHomes)

  console.log(filteredHomes);
  } , );

  return (
    <ThemeProvider theme={theme} style={{ fontFamily: "Kanit" }}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{ fontFamily: "Kanit" }}
          >
           Detail Page
          </Typography>

        </Toolbar>
      </AppBar>
      <br></br>
      
     <Container >
     <CardActions>
       <Button style={{width:"80px",height:"30px",fontFamily:"Kanit", marginTop:"10px"}} a href="./">Back</Button>
                  </CardActions>
     <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
      <Card>
        <CardMedia
        component="img"
        height="300"
        image={searchID.profile_image_url}
        />
        
        <CardContent>
          
            <h2 style={{textAlign:"left"}}>{searchID.name} </h2> 
            <h2 style={{textAlign:"right" }} ><AiFillStar /> {searchID.rating}</h2>
        </CardContent>
        <CardContent md={5}>
        <h2 style={{textAlign:"left",marginTop:"10px"}}>Address:     {searchID.address} </h2>
        </CardContent>
        <CardContent md={5}>
        <h2 style={{textAlign:"left",marginTop:"10px"}}> operation time: {data.operation_time}</h2>
        </CardContent>
          
        
      </Card>
  </Grid>
  <Grid item xs={6} md={4} >

 
  <Card>
  <img
      src={searchID.images}
      style={{ width: "100%", height: "100%" }}
   />
  </Card>

 

 
    
 
 
    

   
  </Grid>
  </Grid>
     </Container>

      
    </ThemeProvider>
  );
}
export default DetailPage;
