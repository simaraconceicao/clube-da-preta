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
            <p>
            Você tem ideia de qual é seu estilo feito por afroempreendedores? 
            Identificamos dentre os fornecedores do Clube da Preta alguns diversos estilos de moda. 
            E conseguimos identificar 5 que são os mais comuns entre eles: Basico, Clássico, Casual, Esporte e Fashion.
            Que tal participar do nosso quiz para saber qual mais combina com você? Vem, vamos descobrir juntos!
            </p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-secondary"
                    label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                />
                <Button variant="contained" color="primary">
                    Vamos descobrir?
                </Button>
             </form>
           
            

            

            
        </div>


    )

} 