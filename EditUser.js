import React, { useState } from 'react';
import { Link, useParams, } from "react-router-dom";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'react-bootstrap/Image';
import Alert from '@mui/material/Alert';

//edits user basic information
export function EditUser({Users, setUsers}) {

  const [open, setopen] = useState(true);//usestate for dialog
  const [snackopen, setSnackOpen] = React.useState(false);//usestate for snackbar

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //get id from url bar
  const { id } = useParams();

  //handles on click event of edit button
  const handleClick = () => {
      setopen(false);
      setSnackOpen(true);//opens snack bar

      // updates user's basic data based on id
      Users[id].name = name
      Users[id].username = username
      Users[id].password = password

      console.log("editted");
  };

  return (
    <div className="create container">
      
      {/* background image */}
      <Image fluid="true" src="https://c0.wallpaperflare.com/preview/277/8/887/network-digital-marketing-share-mobile.jpg"></Image>
      
      {/* Snack bar to telling user got edited */}
      <Snackbar open={snackopen} autoHideDuration={5000} onClose={() => { setSnackOpen(false); }}>
        <Alert onClose={() => { setSnackOpen(false); }} severity="success" sx={{ width: '100%' }}>
          CONGRATULATIONS!!! User Got Edited !
        </Alert>
      </Snackbar>

      {/* Dialog asking details to edit */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Provide Details for {Users[id].name}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
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
        </DialogContent>
        <DialogActions>
          {/* directs to users page */}
          <Link to="/users"><Button>Cancel</Button></Link>

          {/* directs to user page as well as edit detail on click */}
          <Link to="/users"><Button onClick={handleClick} type="submit" disabled={(name !== "" && username !== "" && password !== "") ? false : true}>Edit</Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
