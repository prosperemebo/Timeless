import classes from './Venue.module.scss';
import weddingIcon from '../../assets/wedding-icon.png';
import cheersIcon from '../../assets/cheers-icon.png';

const Venue = () => {
  return (
    <section className={classes.Venue}>
      <h1 className='heading-primary'>Venue</h1>
      <div className={classes.venues}>
        <div className={`card ${classes.venueItem}`}>
          <img src={weddingIcon} alt='Wedding Icon' />
          <h3 className='heading-tertiary'>Wedding Ceremony</h3>
          <p className='paragraph'>
            AT HARVESTERS INT'L CHRISTIAN CENTER, 308, beside Thoedolite House,
            ikorodu road by Anthony Bus stop, Maryland, Lagos.
          </p>
          <p className='paragraph'>TIME: 12PM Noon</p>
        </div>
        <div className={`card ${classes.venueItem}`}>
          <img src={cheersIcon} alt='Cheers Icon' />
          <h3 className='heading-tertiary'>Wedding Party</h3>
          <p className='paragraph'>
            Reception follows immediately at divine events centre, 7
            Shepherdhill Baptist Church, Baptist Academy, Obanikoro bus/stop,
            Lagos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Venue;
