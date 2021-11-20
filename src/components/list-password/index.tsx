// Core
import { FC } from 'react';

// Styles
import * as classes from './list-password.module.css';

// Types
type ListPasswordPropsType = {
  passwords: string[],
}

const ListPassword: FC<ListPasswordPropsType> = ({ passwords }) => (
  <ul className={classes.list}>
    {passwords.map(password => (
      <li className={classes.item}>
        <div className={classes.line}>
          <span>{password}</span>
          <button className={classes.button}>Click to copy</button>
        </div>
      </li>
    ))}
  </ul>
)

export { ListPassword }