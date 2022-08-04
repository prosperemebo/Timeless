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
      <div className={`card ${classes.rsv}`}>
        <h2 className='heading-secondary'>Colours of the Day</h2>
        <div className={classes.info}>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>BRIDE’S FAMILY</h3>
            <p className='paragraph'>Onion &amp; Magenta</p>
          </div>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>GROOM’S FAMILY</h3>
            <p className='paragraph'>Magenta &amp; Nugget Gold</p>
          </div>
        </div>
        <h2 className='heading-secondary'>RSVP</h2>
        <div className={classes.info}>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>Olaide Eremiokhale</h3>
            <p className='paragraph'>08026263744</p>
          </div>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>Temitope Beckley</h3>
            <p className='paragraph'>07036623355</p>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>Babajide Adigun</h3>
            <p className='paragraph'>08033084982</p>
          </div>
          <div className={classes.data}>
            <h3 className='heading-tertiary'>Titilayo Orojimi</h3>
            <p className='paragraph'>08029134533</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
