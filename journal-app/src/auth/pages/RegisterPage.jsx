
import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material';
import {Grid,Typography,TextField,Button,Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
 
      <AuthLayout title='Create an Account'>
         <form>
        <Grid container>

        <Grid item xs={12} sx={{mt:2}}>
          <TextField 
            label="Full Name" 
            type="text" 
            placeholder='Your Name'
            fullWidth
            />

         </Grid>
         
         <Grid item xs={12} sx={{mt:2}}>
          <TextField 
            label="Email" 
            type="email" 
            placeholder='example@google.com'
            fullWidth
            />

         </Grid>
         <Grid item xs={12} sx={{mb:2,mt:1}}>
          <TextField 
            label="Password" 
            type="password" 
            placeholder='Password'
            fullWidth
            />

         </Grid>

<Grid container spacing={2} >
 <Grid item xs={12} >
   <Button variant='contained' fullWidth>
     Create an Account
   </Button>
 </Grid>

 
</Grid>

        <Grid sx={{mt:2}} container direction='row' justifyContent='end'>
        
        <Typography sx={{mr:1}}>Do you have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
          log in
          </Link>
         
        </Grid>
        
        </Grid>


       </form>

     
      </AuthLayout>

      
   

    
  )
}

