import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Wallet = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Paper variant="outlined" style={{width:"100%",backgroundColor:"#2d5fc3", borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
                <Typography align="center" style={{color:"white", marginBottom:15, marginTop:10}}>BlockChain Address</Typography>
                <Grid container>
                    <Grid item md={3}></Grid>
                    <Grid item md={2}>
                        <Avatar alt="Remy Sharp" src="/token.png" className={classes.large} />
                    </Grid>
                    <Grid item md={7} alignItems="center" justify="center">
                        <Typography style={{color:"white",margin:"auto"}}>
                            Balance
                        </Typography>                    
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="outlined" style={{backgroundColor:"white"}} size="large">Buy</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Wallet;