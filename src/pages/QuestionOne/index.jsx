import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
export default function Header(){
    const classes = useStyles();

    return(
        <div>
            <h1>
                Qual o seu estilo?
            </h1>
           
            <form className={classes.root} noValidate autoComplete="off">
                <Button variant="contained" color="primary">
                    Vamos descobrir?
                </Button>
                <Button variant="contained" color="primary">
                    Vamos descobrir?
                </Button>
             </form>
           
            

            

            
        </div>


    )

} 