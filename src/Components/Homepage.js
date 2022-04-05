/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  TextField,
  Button,
  Container,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CardHeader,
  Avatar,
  CardMedia,
  ListItem,
} from "@material-ui/core";
import data from "./Data/example_data.json";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import { Pagination } from "@material-ui/lab";
import { AiFillStar } from "react-icons/ai";
import { Col } from "reactstrap";
import React, { useState } from "react";
import withRouter from "react-router-dom/withRouter";


const listType = [
  {
    nametype: "restaurant",
  },
  {
    nametype: "cafe",
  },
  {
    nametype: "bakery",
  },
];

const d = new Date();
let text = d.toLocaleString()
const theme = createTheme();

function Homepage(props) {
  const [searchname, setSearchname] = useState("");
  const [Newname, setNewname] = useState([]);
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const onChangeSearchname = (e) => {
    setSearchname(e.target.value);
  };

  
  const getmenu = (e) => {  
    if (searchname || type) {
     
      const filteredHomes = data.filter((x) =>
        searchname
          
          ? x.name === searchname && x.categories.map((y) => y).includes(type)
          :x.name === searchname&& x.categories.map((y) => y).includes(" ")
          ? type
          : x.categories.map((y) => y).includes(type)
      );
      setNewname(filteredHomes);
      console.log(filteredHomes);
      console.log(type);
    } else {
      setNewname(data);
    }
  };
  React.useEffect(() => {
    getmenu();
    
  }, );

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
            Album layout
          </Typography>
        </Toolbar>

        {/* Search Bar */}

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 1,
            pb: 2,
          }}
        >
        <Container>
        <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
        <TextField
          id="outlined-select-currency-native"
          select
          style={{ width: "100%" }}
          label=" "
          InputLabelProps={{
            style: { fontFamily: "Kanit" },
          }}
          FormHelperTextProps={{
            style: { fontFamily: "Kanit" },
          }}
          SelectProps={{
            native: true,
            style: { fontFamily: "Kanit" },
          }}
          variant="outlined"
          onChange={handleChange}
        >
          <option value={""} style={{ fontFamily: "Prompt" }}>
            แสดงทั้งหมด
          </option>
          {listType.map((list, i) => (
            <option
              key={i}
              value={list.nametype}
              style={{ fontFamily: "Prompt" }}
            >
              {list.nametype}
            </option>
          ))}
        </TextField>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Grid item xs={12} md={5}>
        <TextField
          id="outlined-basic"
          label="Search name"
          style={{ width: "100%" }}
          defaultValue=""
          InputProps={{ style: { fontFamily: "Kanit" } }}
          InputLabelProps={{
            style: { fontFamily: "Kanit" },
          }}
          FormHelperTextProps={{
            style: { fontFamily: "Kanit" },
          }}
          variant="outlined"
          onChange={onChangeSearchname}
        />
        </Grid>
        
        
        <Grid item xs={12} md={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            fontFamily: "Kanit",
           
            marginTop: "8px",
            height: "40px",
          }}
          type="submit"
          onClick={getmenu}
        >
          Search
        </Button>
      
      </Grid>
        </Grid>
        </Container>
        </Box>
      </AppBar>
      {/* Detail */}
      <main>
        <Container md={8}>
          <Grid container spacing={4} style={{ marginTop: "10px" }}>
            {Newname.map((listValue) => (
              <Grid item key={listValue.id} xs={12} sm={8} md={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar>
                        <img
                          src={listValue.profile_image_url}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Avatar>
                    }
                    title={
                      <h3 style={{ fontFamily: "Kanit", textAlign: "left" }}>
                        {listValue.name}
                      </h3>
                    }
                  />

                  <div style={{ marginRight: "20px", marginBottom: "10px" }}>
                    <Col>
                      <h3 style={{ textAlign: "right" }}>
                        <AiFillStar /> {listValue.rating}
                      </h3>
                    </Col>
                  </div>

                  <CardMedia>
                    <AwesomeSlider
                      bullets={false}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div>
                        <img
                          src={listValue.images[0]}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div>
                        <img
                          src={listValue.images[1]}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div>
                        <img
                          src={listValue.images[2]}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </AwesomeSlider>
                  </CardMedia>
                  <CardContent md={{ flexGrow: 2 }}>
                    <Typography style={{ fontFamily: "Kanit" }}>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"  onClick={() => {
                      
                        props.history.push({
                        pathname: "/Detail",
                        search: `?id=${
                          listValue.id
                        }`,
                      });
                    }}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        
      </Box>
    </ThemeProvider>
  );
}
export default withRouter(Homepage);
