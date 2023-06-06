import React from 'react'
import './HomeFooterInfom.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTranslation } from "react-i18next";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   justifyContent:'center',
   
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '32ch',
    margin:'23px',
   
    
  },OutlinedInput: {
  borderRadius:'44px'
    
  },MuiOutlinedInputRoot: {

    borderRadius: '33px'
}
}));
const HomeFooterInfom = () => {
    
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div className='homepage-footer-section'>
         <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{height: '4vh', display:'flex',justifyContent:'center' }}> 
        <h3 className='home-page-footer-heading'>{t('Are you debating whether you should choose us?')}</h3>
        
        </Typography>
        <br></br>
        <Typography style={{height: '8vh', display:'flex',justifyContent:'center' }}>
        <h3 className='home-page-footer-heading2'>{t('Leave details and one of our representatives will get back to you in the next hour!')}</h3>
        
        </Typography>
      </Container>
      <div className={classes.root}>
    
    
      <div className='mat'>
     
      <FormControl className={clsx(classes.margin, classes.textField, classes.roundedInput)} variant="outlined">
      <Button variant="outlined">{t('Contact')}</Button>
  </FormControl>



        <FormControl className={clsx(classes.margin, classes.textField, classes.roundedInput)} variant="outlined">
    <OutlinedInput
      id="outlined-adornment-weight"
      value={values.weight}
      onChange={handleChange('weight')}
      endAdornment={<InputAdornment position="end">{t('Phone Number')}</InputAdornment>}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      labelWidth={0}
    />
  </FormControl>
  <FormControl className={clsx(classes.margin, classes.textField, classes.roundedInput)} variant="outlined">
    <OutlinedInput
      id="outlined-adornment-weight"
      value={values.weight}
      onChange={handleChange('weight')}
      endAdornment={<InputAdornment position="end">{t('Email')}</InputAdornment>}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      labelWidth={0}
    />
  </FormControl>
  <FormControl className={clsx(classes.margin, classes.textField, classes.roundedInput)} variant="outlined">
    <OutlinedInput
      id="outlined-adornment-weight"
      value={values.weight}
      onChange={handleChange('weight')}
      endAdornment={<InputAdornment position="end">{t('Full Name')}</InputAdornment>}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      labelWidth={0}
    />
  </FormControl>
</div>

    </div>
    </React.Fragment>
    </div>
  )
}

export default HomeFooterInfom