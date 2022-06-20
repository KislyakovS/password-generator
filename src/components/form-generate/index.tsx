import React, { FC, FormEvent } from 'react';

import { Fieldset, Button } from '../../ui';
import { Length } from './length';
import { Checkboxes } from './checkboxes';
import { Strength } from './strength';

import { generatePasswords } from '../../bus/passwords';

import * as classes from './form-generate.module.css';

const FormGenerate: FC = () => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    generatePasswords();
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
};

export { FormGenerate };
