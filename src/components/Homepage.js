import React from 'react'
import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./EmployeeList";

function Homepage() {
  return (
    <div className='homepage'>
      <Header/>
  
  <Searchbar/>
  <EmployeeList/>
    </div>
    
  )
}

export default Homepage