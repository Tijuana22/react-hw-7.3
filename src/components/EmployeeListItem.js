import React from 'react'
import person from '../imgs/download.png'
function EmployeeListItem() {
  return (
  <div className='employee-container'>
    <img src={person} alt="person"></img>
    <div className='employee-item'>
      <h2>Employee Name</h2>
      <p>Employee job title</p>
    </div>
  </div>

  )
}

export default EmployeeListItem