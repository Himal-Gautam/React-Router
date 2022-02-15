import React from 'react';
import Image from 'react-bootstrap/Image'

// dashboard data
export function Home() {
  return (
    <div id="welcome">
      <Image fluid="true" src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg"></Image>
      <h1><b>Welcome to React-Router-DOM Practice Site</b></h1>
      <h3>You are at Dashboard</h3>
      <h6><i>Please Check the Navigation for More Options</i></h6>
    </div>
  );
}
