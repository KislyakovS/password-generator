// Core
import { FC, useCallback, ChangeEvent } from 'react';

// Components
import { Checkbox } from '../../ui';
import { Length } from './length';

// Types
import { OptionsType } from '../../utils/password';

// Instruments
import * as classes from './customize.module.css';

type CustomizeType = {
  options: OptionsType
  setLength: (value: number) => void;
  setIsUppercase: (value: boolean) => void;
  setIsLowercase: (value: boolean) => void;
  setIsSymbol: (value: boolean) => void;
  setIsNumber: (value: boolean) => void;
}

const Customize: FC<CustomizeType> = ({
  options,
  setLength,
  setIsUppercase,
  setIsLowercase,
  setIsSymbol,
  setIsNumber
}: CustomizeType) => {
  const onChangeUppercase = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setIsUppercase(event.target.checked);
  }, [setIsUppercase]);

  const onChangeLowercase = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setIsLowercase(event.target.checked);
  }, [setIsLowercase]);

  const onChangeNumber = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setIsNumber(event.target.checked);
  }, [setIsNumber]);

  const onChangeSymbol = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setIsSymbol(event.target.checked);
  }, [setIsSymbol])

  return (
    <div className={`container`}>
      <h3 className={classes.title}>Customize your password</h3>
      <form className={classes.form}>
        <Length value={options.length || 1} onChange={setLength} />
        <div>
          <Checkbox
            className={classes.checkbox}
            name="uppercase"
            checked={options.isUppercase || false}
            onChange={onChangeUppercase}
          >
            Uppercase
          </Checkbox>
          <Checkbox
            className={classes.checkbox}
            name="lowercase"
            checked={options.isLowercase || false}
            onChange={onChangeLowercase}
          >
            Lowercase
          </Checkbox>
          <Checkbox
            className={classes.checkbox}
            name="numbers"
            checked={options.isNumber || false}
            onChange={onChangeNumber}
          >
            Numbers
          </Checkbox>
          <Checkbox
            className={classes.checkbox}
            name="symbols"
            checked={options.isSymbol || false}
            onChange={onChangeSymbol}
          >
            Symbols
          </Checkbox>
        </div>
      </form>
    </div>
  )
}

export { Customize }