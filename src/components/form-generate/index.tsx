// Core
import React, { FC, FormEvent } from 'react';
import { observer } from 'mobx-react-lite';

// Components
import { Fieldset, Button } from '../../ui';
import { Length } from './length';
import { Checkboxes } from './checkboxes';
import { Strength } from './strength';

// State
import { password } from '../../store/password';

// Styles
import * as classes from './form-generate.module.css';

const FormGenerate: FC = observer(() => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    password.generate();
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Fieldset legend="Strength" description="Use ← → for quick setup">
        <Strength />
      </Fieldset>
      <Fieldset legend="Custom" description="Make custom password">
        <Checkboxes className={classes.checkboxes} />
        <Length />
      </Fieldset>
      <Button type="submit" className={classes.submit} description="Or press ↩︎ ENTER">
        Generate
      </Button>
    </form>
  );
});

export { FormGenerate };
