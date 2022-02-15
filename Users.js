import { ContentCards } from './ContentCards.js';
import { React } from "react";

//Create users for users page
export function Users({Users, setUsers}) {
console.log(Users);
  return (
    <div className="user-content">
      {/* send data user by users to content card function 
      to create card for that user */}
      {Users.map((item, index) => (
        <ContentCards user={item} id={index}/>
      ))} 
    </div>
  );
}
