import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields() {
  return (
    <>
    <h2>Create Student</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', },
      }}
      noValidate
      autoComplete="off"
      marginBottom={3}
    >
        
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
    </>
  );
}
