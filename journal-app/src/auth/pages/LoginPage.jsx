
import {Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material';
import {Grid,Typography,TextField,Button,Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
export const LoginPage = () => {
  return (
 
      <AuthLayout title='Login'>
         <form>
        <Grid container>
         
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
 <Grid item xs={12} sm={6}>
   <Button variant='contained' fullWidth>
     Login
   </Button>
 </Grid>

 <Grid item xs={12} sm={6}>
   <Button variant='contained' fullWidth>
      <Google/>
      <Typography sx={{ml:1}}>Google</Typography>
   </Button>
 </Grid>
</Grid>

        <Grid container direction='row' justifyContent='end'>
        
          <Link component={RouterLink} color="inherit" to="/auth/register">
          Create an account
          </Link>
         
        </Grid>
        
        </Grid>


       </form>

     
      </AuthLayout>

      
   

    
  )
}

