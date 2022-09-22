import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import axios from "axios"
import "./createStudent.css"



export default function Create() {

  const [student, setStudent] = useState({

    regNo: 0,
    studentName: "",
    grade: "",
    section: ""
  })

  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload();
    })
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <h2>Create Student</h2>
        <TextField id="outlined-basic" className='text-field-margin' label="Registeration No" variant="outlined" value={student.regNo} onChange={(event) => {
          setStudent({ ...student, regNo: event.target.value })
        }} />
        <TextField id="outlined-basic" className='text-field-margin' label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value })
        }} />
        <TextField id="outlined-basic" className='text-field-margin' label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({ ...student, grade: event.target.value })
        }} />
        <TextField id="outlined-basic" className='text-field-margin' label="Section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({ ...student, section: event.target.value })
        }} />
        <Button variant="contained" color="primary" onClick={createStudent} >Create</Button>
      </>
    </Box>
  );
}

