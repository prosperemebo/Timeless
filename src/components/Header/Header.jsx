import classes from './Header.module.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import flower from '../../assets/flower.png';
import coverimage from '../../assets/overview.png';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Header = () => {
  return (
    <motion.header
      initial='initial'
      animate='animate'
      exit='exit'
      className={classes.Header}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, ...transition },
        }}
        className={classes.logo}
      >
        <img src={logo} alt='Timeless 2022' />
      </motion.div>
      <div className={classes.flower}>
        <img src={flower} alt='Flower' />
      </div>

      <div className={classes.textbox}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, ...transition },
          }}
          className='heading-tertiary'
        >
          Timeless 2022
        </motion.h3>
        <motion.h1 className='heading-primary'>
          <motion.span variants={firstName}>
            <motion.span variants={letter}>T</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>&nbsp;&amp;&nbsp;</motion.span>
          </motion.span>
          <motion.span variants={lastName}>
            <motion.span variants={letter}>O</motion.span>
            <motion.span variants={letter}>l</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>w</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>j</motion.span>
            <motion.span variants={letter}>u</motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, ...transition },
          }}
          className='paragraph'
        >
          A Solemnization Holy Matrimony.
        </motion.p>
      </div>

      <figure className={classes.overview}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, ...transition },
          }}
          src={coverimage}
          alt='Couple'
        />
      </figure>
    </motion.header>
  );
};

export default Header;
