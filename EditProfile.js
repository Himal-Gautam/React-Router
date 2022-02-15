import React, { useState, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// edits profile data
export function EditProfile({Users, setUsers}) {

  const [open, setopen] = useState(true);
  const [snackopen, setSnackOpen] = React.useState(false);

  const [profile, setProfile] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const { id } = useParams();
  
  //handles on click event of edit button
  const handleAdd = () => {
      setopen(false);
      setSnackOpen(true);

      // updates profile data based on id
      Users[id].gender = gender
      Users[id].image = profile
      Users[id].address = address
      Users[id].phone = phone
      Users[id].email = email

      console.log("editted");
  };

  return (
    <div className="create container">
      {/* background image */}
      <Image fluid="true" src="https://c0.wallpaperflare.com/preview/277/8/887/network-digital-marketing-share-mobile.jpg"></Image>

      {/* gives message of profile update on task complition */}
      <Snackbar open={snackopen} autoHideDuration={5000} onClose={() => { setSnackOpen(false); }}>
        <Alert onClose={() => { setSnackOpen(false); }} severity="success" sx={{ width: '100%' }}>
          CONGRATULATIONS!!! Profile Got Edited !
        </Alert>
      </Snackbar>

      {/* dialogue asking for profile details to update */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>Edit Profile Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Provide Details for {Users[id].name}
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="Address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setAddress(event.target.value)}
            required />
          <TextField
            autoFocus
            margin="dense"
            id="Phone"
            label="Phone"
            type="tel"
            fullWidth
            variant="standard"
            onChange={(event) => setPhone(event.target.value)}
            required />
          <TextField
            autoFocus
            margin="dense"
            id="Email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setEmail(event.target.value)}
            required />
          <TextField
            autoFocus
            margin="dense"
            id="profile_img"
            label="Profile Image url"
            type="url"
            fullWidth
            variant="standard"
            onChange={(event) => setProfile(event.target.value)}
            required />
            <FormLabel id="demo-row-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
            row
              aria-labelledby="demo-row-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </DialogContent>
        <DialogActions>
          {/* links to profile details */}
          <Link to={`/profile/${String(id)}`}><Button>Cancel</Button></Link>

          {/* Edits profile data on click & links to profile page */}
          <Link to={`/profile/${String(id)}`}><Button onClick={handleAdd} type="submit" disabled={(address !== "" && phone !== "" && email !== "" && profile !== "") ? false : true}>Edit</Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
