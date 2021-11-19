// Core
import { FC } from 'react';

// Components
import { Checkbox } from '../../ui';
import { Length } from './length';

// Instruments
import * as classes from './customize.module.css';

const Customize: FC = () => {
  return (
    <div className={`container`}>
      <h3 className={classes.title}>Customize your password</h3>
      <form className={classes.form}>
        <Length />
        <div>
          <Checkbox className={classes.checkbox} name="uppercase">
            Uppercase
          </Checkbox>
          <Checkbox className={classes.checkbox} name="lowercase">
            Lowercase
          </Checkbox>
          <Checkbox className={classes.checkbox} name="numbers">
            Numbers
          </Checkbox>
          <Checkbox className={classes.checkbox} name="symbols">
            Symbols
          </Checkbox>
        </div>
      </form>
    </div>
  )
}

export { Customize }