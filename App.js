import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { data } from './data';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { Err } from './Err';
import { Home } from './Home';
import Button from '@mui/material/Button';
import {Navbar, Nav, Container,} from 'react-bootstrap';
import { Users } from './Users';

import { CreateUser } from './CreateUser';
import { Profile } from './Profile';
import { EditUser } from './EditUser';
import { EditProfile } from './EditProfile';


function App() {
 
  // data() frovides predefined user data
  // using useState for users data
  const [users, setusers] = useState(data());

  return (
    <div className="App">

      {/* navigation bar */}
      <Navbar bg="light" expand="lg">
        
        <Container>
        
          <Navbar.Brand href="#home" id="brand">
            <h3>React-Router-DOM</h3>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Links to different url or pages */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/dashboard"><Button startIcon={<HomeIcon/>}>Dashboard</Button></Link>
              <Link to="/users"><Button startIcon={<GroupIcon/>}>Users</Button></Link>
              <Link to="/create-user"><Button startIcon={<PersonAddAlt1Icon/>}>Create User</Button></Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <div className="content">
            {/* switch router showing data based on url */}
            <Switch>
              <Route exact path="/">
                  <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard">
                <Home/>
              </Route>
              <Route path="/users">
                <Users Users={users} setUsers={setusers}/>
              </Route>
              <Route path="/create-user">
                <CreateUser Users={users} setUsers={setusers}/>
              </Route>
              <Route path="/edit-user/:id">
                <EditUser Users={users} setUsers={setusers}/>
              </Route>
              <Route path="/profile/:id">
                <Profile Users={users} setUsers={setusers}/>
              </Route>
              <Route path="/edit-profile/:id">
                <EditProfile Users={users} setUsers={setusers}/>
              </Route>

              {/* matches with any string other than not defined above*/}
              <Route path="**">
                <Err/>
              </Route>
            </Switch>
        </div>
      </div>
  )
}

export default App;


