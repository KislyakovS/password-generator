// Components
import { Logo } from './ui';
import { FormGenerate, ListPassword } from './components';

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
      <Logo />
      <div className="container mt-80">
        <FormGenerate />
        <ListPassword />
      </div>
    </>
  )
}

export { App };
