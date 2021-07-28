import React from "react";
import useStyles from "./styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";
import {
  Card,
  CardAct,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";

const Post = ({post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      {!post ? (
        <div>hihi</div>
      ) : (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          src={"require"}
        />
      )}

      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.creatorAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{color: "white"}}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" colỏ="textSecondary">
          {post.tags.map((tag) => {
            return `#${tag} `;
          })}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; like &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
