import classes from './Register.module.scss';
import qrCode from '../../assets/qrcode.jpg';

const Register = () => {
  return (
    <section className={classes.Register}>
      <h1 className='heading-primary'>Registration</h1>
      <p className='paragraph'>Scan to register, we’re excited to have you!</p>
      <div className='sizedbox'></div>
      <div className={`card ${classes.code}`}>
        <a
          target='_blank'
          href='https://guesttrack.io/visit/#/qwnwefsiswk/t/GuestPass/pre-registration'
          rel='noreferrer'
        >
          <img src={qrCode} alt='QRCode' />
        </a>
      </div>
      <div className='sizedbox'></div>
      <p className='paragraph'>
        Admittance is based on registration and strictly by invitation.
      </p>
    </section>
  );
};

export default Register;
