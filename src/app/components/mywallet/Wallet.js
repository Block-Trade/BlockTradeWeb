import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getAllConn } from '../../actions/connection';
import { loadUser } from '../../actions/auth';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: '#2d5fc3',
    borderRadius: '30px',
    maxWidth: 1000,
    textAlign: 'center',
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    marginTop: '3rem',
  },
  pos: {
    marginBottom: 12,
  },
}));

const Wallet = ({ conn, loadUser, getAllConn, auth }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    isOpen: false,
    value: 'defaultvalue',
  });
  const [selected, setSelected] = useState('');
  const [amt, setAmt] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (auth.user) {
      getAllConn();
    }
  }, [auth.user]);
  useEffect(() => {
    if (conn.main_contract) {
      fetchData();
    }
  }, [conn.main_contract]);

  const fetchData = async () => {
    //e.preventDefault();
    var bal = await conn.main_contract.methods
      .balanceOf(conn.current_account)
      .call();
    setBalance(bal);
    console.log(balance);
  };
  const toggleModal = () => {
    setState({
      isOpen: !state.isOpen,
    });
  };

  const buyTokens = async (etherAmount) => {
    etherAmount = window.web3.utils.toWei(etherAmount, 'Ether');
    conn.main_contract.methods
      .buyTokens()
      .send({ value: etherAmount, from: conn.current_account })
      .on('transactionHash', (hash) => {
        console.log('BuyTokens');
      });

    setSelected('');
    setAmt(0);
  };

  const sellTokens = async (tokenAmount) => {
      tokenAmount = tokenAmount / 100;
      tokenAmount = window.web3.utils.toWei(tokenAmount, 'Ether')
    conn.main_contract.methods
      .sellToken(tokenAmount)
      .send({ from: conn.current_account })
      .on('transactionHash', (hash) => {
        console.log('sellTokens');
      });

    setSelected('');
    setAmt(0);
  };

  const toggleModalClose = () => {
    setState({
      isOpen: false,
      value: 'defaultvalue',
    });
  };
  return (
    <div className={classes.root} style={{ marginTop: '10rem' }}>
      <Card className={classes.root} raised>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
            style={{
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            {conn.current_account}
          </Typography>
          <div
            style={{
              margin: '0 auto',
              left: '50%',
            }}
          >
            <Typography
              variant='h5'
              component='h2'
              style={{
                display: 'inline-block',
                color: '#ffffff',
                margin: '0 auto',
                marginTop: '3rem',
              }}
            >
              {balance}
            </Typography>
            <img
              alt='bt token'
              src={require('./token.png')}
              style={{
                maxWidth: '2rem',
                maxWidth: '2rem',
                marginLeft: '1rem',
                display: 'inline-block',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              style={{
                backgroundColor: 'white',
                maxWidth: '10rem',
                marginBottom: '2rem',
                marginTop: '3rem',
                textAlign: 'center',
              }}
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                setSelected('Buy');
                toggleModal();
              }}
            >
              Buy
            </Button>
            <br />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='outlined'
              style={{ backgroundColor: 'white', maxWidth: '10rem' }}
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                setSelected('Sell');
                toggleModal();
              }}
              size='sm'
            >
              Sell
            </Button>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Modal
        show={state.isOpen}
        onClose={toggleModalClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Modal.Title id='contained-modal-title-vcenter'>
            {selected} Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='pt-3'>
            <Form.Group className='d-flex search-field'>
              <Form.Control
                type='number'
                placeholder='Amount'
                size='lg'
                className='h-auto'
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
              />
            </Form.Group>
          </Form>

          <div className='mt-3'>
            <button
              className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
              onClick={(e) => {
                e.preventDefault();
                if (selected === 'Buy') {
                  buyTokens(amt);
                } else {
                  sellTokens(amt);
                }
                toggleModalClose();
              }}
            >
              Submit
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={toggleModalClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({ conn: state.conn, auth: state.auth });

export default connect(mapStateToProps, { loadUser, getAllConn })(Wallet);
