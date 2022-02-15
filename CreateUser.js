import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Image from 'react-bootstrap/Image';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

//creates user using useState
export function CreateUser({Users, setUsers}) {

  //declaring useStatee consts
  const [open, setopen] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [snackopen, setSnackOpen] = React.useState(false);

 //handles on click
  const handleAdd = () => {
      setopen(false);
      setSnackOpen(true);

      //adds users at the end of the data using setState
      setUsers([
        ...Users,
        {
          image: profile,
          name: name,
          username: username,
          password: password,
          address: "",
          phone: "",
          email: ""
        }
      ]);
    console.log("added");
  };

  return (
    <div className="create container">

      {/* background image */}
      <Image fluid="true" src="https://c0.wallpaperflare.com/preview/277/8/887/network-digital-marketing-share-mobile.jpg"></Image>
      
      {/* gives message about adding the user on task complition */}
      <Snackbar open={snackopen} autoHideDuration={5000} onClose={() => { setSnackOpen(false); }}>
        <Alert onClose={() => { setSnackOpen(false); }} severity="success" sx={{ width: '100%' }}>
          CONGRATULATIONS!!! User Got Addeded !
        </Alert>
      </Snackbar>

      {/* dialogue box asking basic details */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Provide Basic Details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="filled"
            onChange={(event) => setName(event.target.value)}

            required />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="filled"
            onChange={(event) => setUsername(event.target.value)}
            required />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="text"
            fullWidth
            variant="filled"
            onChange={(event) => setPassword(event.target.value)}
            required />
          <TextField
            autoFocus
            margin="dense"
            id="profile_img"
            label="Profile Image url"
            type="url"
            fullWidth
            variant="filled"
            onChange={(event) => setProfile(event.target.value)}
            required />
        </DialogContent>
        <DialogActions>
          {/* links to the dashboard */}
          <Link to="/dashboard"><Button>Cancel</Button></Link>

          {/* adds user and links to users page*/}
          <Link to="/users"><Button onClick={handleAdd} type="submit" disabled={(name !== "" && username !== "" && password !== "") ? false : true}>Add</Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
