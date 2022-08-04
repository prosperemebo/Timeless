import classes from './About.module.scss';
import compositionImg from '../../assets/comp-1.png';

const About = () => {
  return (
    <section className={classes.About}>
      <div className={classes.content}>
        <div className={classes.heading}>
          <h1 className='heading-primary'>Our Love</h1>
          <h1 className={`heading-primary ${classes.ml}`}>is Timeless</h1>
        </div>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <h3 className='heading-tertiary'>DATE: 27th AUG 2022</h3>
      </div>
      <div className={classes.composition}>
        <img src={compositionImg} alt='Tomisin' />
      </div>
    </section>
  );
};

export default About;
