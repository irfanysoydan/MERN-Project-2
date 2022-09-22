import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ShowStudent() {

  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allStudents) => {
      setStudentList(allStudents.data)
    })
  })

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);
    })
  }

  return (
    <>
      <h2>All Students</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Registeration Number</TableCell>
              <TableCell align="left">Grade</TableCell>
              <TableCell align="left">Section</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.studentName}
                </TableCell>
                <TableCell align="left">{student.regNo}</TableCell>
                <TableCell align="left">{student.grade}</TableCell>
                <TableCell align="left">{student.section}</TableCell>
                <TableCell align="left">
                  <IconButton aria-label="delete" size="large" onClick={() => deleteStudent(student._id)}>
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
