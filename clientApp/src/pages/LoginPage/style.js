import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  title: {
    fontSize: '22px',
    color: '#676c8c',
    fontWeight: '600',
  },
  button: {
    "&:hover": {
      backgroundColor: '#f6685e'
    },
    width: '50%',
    margin: '10% auto 0',
    background: '#f44336',
    color: '#fff'
  },
  base: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
    width: '80%',
    margin: theme.spacing(1),
  },
  paper: {
    m: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '30vw',
    height: '60vh',
  },
  paperWrapper: {
    display: 'flex',
    justifyContent: 'right',
    borderRadius: '1%',
    boxShadow: '10px 5px 5px #e6e6e6',
    flexWrap: 'wrap',
    width: '60vw',
    height: '60vh',
  },
  errorUser: {
    fontSize: '24px',
    color: '#f50057',
    fontWeight: '700',
    opacity: '60%',
    bottom: '60%',
    position: 'fixed',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
    width: '80%',
    margin: theme.spacing(1),
  },
}));
export default useStyles;
