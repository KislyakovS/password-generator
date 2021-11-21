// Core
import { FC } from 'react';

// Styles
import * as classes from './list-password.module.css';


const ListPassword: FC = () => (
  <ul className={classes.list}>
    {["eQe@8ZZ&Qbuv$Kcd", "SD?w7LD_EW98zR-r", "MhEQ79hJx_^#$^SQ", "98@Nz$SNky=4UU3v"].map(password => (
      <li key={password} className={classes.item}>
        <div className={classes.line}>
          <span>{password}</span>
          <button className={classes.button}>Click to copy</button>
        </div>
      </li>
    ))}
  </ul>
)

export { ListPassword }