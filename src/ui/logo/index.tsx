// Core
import { FC } from 'react';

// Styles
import * as classes from './logo.module.css';

const Logo: FC = () => (
  <h1 className={classes.logo}>
    <span className={classes.star}>*</span>
    <span className={classes.name}>Password Online</span>
    <span className={classes.slogan}>Simple password generator</span>
  </h1 >
)

export { Logo };
