import React, {useEffect, useState} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import memories from "./img/memories.png";
import Posts from "./Component/Posts/Posts";
import Form from "./Component/Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./actions/posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
