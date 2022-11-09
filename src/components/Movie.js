import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';



export default function Movie() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[title,setTitle]=React.useState("")
    const[rate,setRate]=React.useState("")
    const handleClick = (e) =>
    {e.preventDefault()
    const movie={title,rate}
    console.log(movie)
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    fetch("http://localhost:8080/movielibrary/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(movie)
    }).then(()=>{
        console.log("New Movie added")
    })

}
  return (
        <Paper elevation={3} style ={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1}
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{color:"blue"}}><u>Add Movie</u></h1>
      <TextField id="outlined-basic" label="Movie name" variant="outlined" fullWidth
      value ={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <TextField id="outlined-basic" label="Rate" variant="outlined" fullWidth
        value ={rate}
        onChange={(e)=>setRate(e.target.value)}/>
    </Box>
    <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Paper>
      
  );
}
