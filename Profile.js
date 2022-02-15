import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Profile({Users, setUsers}) {

  // gets id from url as params
  const { id } = useParams();

  // gets user from user data based on id
  const user = Users[id];

  // access to the history instance
  const history = useHistory()

  // handles edit profile click and links to edit-profile using useHistory
  const handleClick = () => {
    history.push("/edit-profile/" + id)
  }

  //returns data of specific user profile based on id
  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={user.image}
        alt="id"
        object-fit="cover" />
      <CardContent>
        <div className="profile-data">
          <TextField
            id="filled-read-only-input"
            label="Full Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
          <TextField
            id="filled-read-only-input"
            label="Username"
            defaultValue={user.username}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
          <TextField
            id="standard-multiline-static"
            label="Gender"
            defaultValue={user.gender}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
          <TextField
            id="standard-multiline-static"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
            <TextField
            id="standard-multiline-static"
            label="Phone no"
            defaultValue={user.phone}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
            <TextField
            id="standard-multiline-static"
            label="Address"
            defaultValue={user.address}
            InputProps={{
              readOnly: true,
            }}
            variant="filled" />
        </div>
      </CardContent>
      <CardActions>
        {/*  onClick event links to edit-profile*/}
          <Button onClick={handleClick}>Edit Profile</Button>
      </CardActions>
    </Card>
  );
}
