// Components
import { InputPassword } from './components/input-password';
import { Customize } from './components/customize';

// Hooks
import { useCustomize } from './bus/customize/hooks';
import { usePassword } from './bus/password/hooks';

const App = () => {
  const { password, setup, generate } = usePassword();
  const {
    options,
    setLength,
    setIsUppercase,
    setIsLowercase,
    setIsSymbol,
    setIsNumber
  } = useCustomize(setup, generate);

  return (
    <>
      <InputPassword password={password} onUpdate={generate} />
      <Customize
        options={options}
        setLength={setLength}
        setIsUppercase={setIsUppercase}
        setIsLowercase={setIsLowercase}
        setIsSymbol={setIsSymbol}
        setIsNumber={setIsNumber}
      />
    </>
  )
}

export { App };
