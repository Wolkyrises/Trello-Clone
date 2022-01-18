import React from 'react';
import { Grid, Paper,Avatar,Typography,TextField,Button,Link} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Tache from './Tache';



const SignUp=()=>{

    return(

        <Grid>
            <Tache/>
            <Paper elevation={20} style={{padding:'60px 60px',width:300,margin:"20px auto",borderRadius:'30px'}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor:'#0554F2',marginBottom:'20px'}}>

                    </Avatar>
                <h2 style={{margin:0}} >Inscription</h2>
                <Typography variant='caption'> Veuillez créer un compte</Typography>
                </Grid>
                <form style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <TextField InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                    <PersonIcon   />
                    </InputAdornment>
                    ),
                    }}
                    style={{marginBottom:'20px',marginTop:'20px'}} label='Email' />
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <PersonIcon   />
                        </InputAdornment>
                        ),
                        }}
                    style={{marginBottom:'20px'}} label="Confirmez l'email"/>
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <LockIcon />
                        </InputAdornment>
                        ),
                        }}
                    style={{marginBottom:'20px'}} label='Mot de passe'/>
                    <TextField
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <LockIcon />
                        </InputAdornment>
                        ),
                        }}
                     style={{marginBottom:'20px'}} label='Confirmez le mot de passe'/>
                    <Button type="submit" variant='contained' style={{backgroundColor:'#0554F2',borderRadius:'10px', marginTop:'10px'}}>S'inscrire</Button>
                    <Link href="/" variant="body2">
                    {"Vous avez déja un compte ? Connectez-vous"}</Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;