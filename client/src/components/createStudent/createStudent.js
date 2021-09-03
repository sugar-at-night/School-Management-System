import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  const [student, setStudent] = useState({
    regNo: 0,
    studentName: '',
    grade:'',
    section:''
  });

  const addStudent = () => {
    axios.post('http://localhost:5000/students', student).then(() =>{
      window.location.reload();
    })
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Registeration No." value={student.regNo} onChange={(event) => {
        setStudent({ ...student, regNo: event.target.value})
      }}/>      
      <TextField id="standard-basic" label="Name" value={student.studentName} onChange={(event) => {
        setStudent({ ...student, studentName: event.target.value})
      }}/>
      <TextField id="standard-basic" label="Grade" value={student.grade} onChange={(event) => {
        setStudent({ ...student, grade: event.target.value})
      }}/>
      <TextField id="standard-basic" label="Section" value={student.section} onChange={(event) => {
        setStudent({ ...student, section: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick={addStudent}>
        Add
      </Button>
    </form>
  );
}
