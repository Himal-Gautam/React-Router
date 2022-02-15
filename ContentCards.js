import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Route, Switch, Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import {Nav} from 'react-bootstrap';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CardActions from '@mui/material/CardActions';
import React from 'react';

//makes card for users page based on params
export function ContentCards({ id, user }) {
  
  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, margin: 2}}>
    <Paper elevation={24}>
      <CardActionArea>
        <div className="card_align">
          {/* contains profile image */}
          <CardMedia
            component="img"
            height="240"
            image={user.image}
            alt={`Profile image ${id}`}
          />

          {/* content of card i.e. name, username, password */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{user.name}</b>
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {user.username}<br/>
              {user.password}
            </Typography>
          </CardContent>

          {/* contains links to repective pages */}
          <CardActions>
            <Link to={`/edit-user/${String(id)}`}><ModeEditIcon/></Link>
            <Link to={`/profile/${String(id)}`}><RemoveRedEyeIcon/></Link>
          </CardActions>
        </div>
      </CardActionArea>
      </Paper>

    </Card>
  )
}
