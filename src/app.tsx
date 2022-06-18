// Core
import React from 'react';

// Components
import { Logo } from './ui';
import { FormGenerate, ListPassword, SwitchTheme } from './components';

const App = () => (
  <>
    <header className="header">
      <Logo />
      <SwitchTheme />
    </header>
    <div className="container mt-80">
      <FormGenerate />
      <ListPassword />
    </div>
  </>
);

export { App };
