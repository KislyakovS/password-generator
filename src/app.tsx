// Components
import { Logo } from "./ui";
import { FormGenerate, ListPassword } from "./components";

const App = () => {
  return (
    <>
      <Logo />
      <div className="container mt-80">
        <FormGenerate />
        <ListPassword />
      </div>
    </>
  );
};

export { App };
