import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#2d5fc3",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(TradeId, blockedAmt, dueDate) {
    return { TradeId, blockedAmt, dueDate };
  }
  
  const rows = [
    createData('eU0hlwXZtG85gPrwT3ZhY6w1eqhCUmQgXkNbV/2QtOQ=','50000000','2020-12-20'),
    createData('4I2AYjWWj0+S2HBHBIyyKgZ1SLk+fgW5RVPmVnOv8tQ=','9000100','2021-01-21'),
    createData('px7vQOaHfpf7kasjAFRKyGZXIbxjamuUtptgq6jCFro=','9810000','2020-11-15')
  ];
  
  

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
  table: {
      minWidth:600
  }
}));

const Wallet = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                <Paper variant="outlined" style={{width:"100%",backgroundColor:"#2d5fc3",borderBottomRightRadius:40,borderBottomLeftRadius:40}}>
                <Typography align="center" style={{color:"white", marginBottom:15, marginTop:10}}>BlockChain Address:{" "}0x8C94d97243c86e22C14436148f4E0C43B1dcF264</Typography>
                <Grid container alignContent="flex-end">
                    <Grid item md={3}></Grid>
                    <Grid item md={6} alignItems="flex-end">
                        <Typography variant="h3" style={{color:"white", paddingTop:50}}>
                            Amount :   19000
                        </Typography>                    
                    </Grid>
                    <Grid item md={2}>
                        <Avatar alt="Remy Sharp" src="/token.png" className={classes.large} />
                    </Grid>
                    
                </Grid>
                <Grid container style={{marginBottom:10}}>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="outlined" style={{backgroundColor:"white"}} fullWidth>Buy</Button>
                    </Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={2}>
                        <Button variant="outlined" style={{backgroundColor:"white"}} fullWidth>Sell</Button>
                    </Grid>
                    
                </Grid>
            </Paper>
                </Grid>
                <Grid item xs={12} alignContent="center">
                <Typography variant="h3" component="h2" align="center">
                    Transactions
                </Typography>
                </Grid>
                
                <Grid item xs={12}>
                <TableContainer component={Paper} style={{borderRadius:25}}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Trade Id</StyledTableCell>
                      <StyledTableCell align="center">Blocked Amount</StyledTableCell>
                      <StyledTableCell align="center">Due Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          <strong>{row.TradeId}</strong>
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.blockedAmt}</StyledTableCell>
                        <StyledTableCell align="center">{row.dueDate}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Wallet;