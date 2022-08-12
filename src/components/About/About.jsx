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
          The love we share knows no boundaries. It jumps hurdles, leaps fences,
          penetrates walls to arrive at its destination full of hope. Two souls;
          but with a single thought, our hearts beats as one. Love is our true
          destiny. We do not find the meaning of life by ourselves alone, we
          find it with each other.
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
