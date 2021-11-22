// Core
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

// Components
import { Section, Button } from '../../ui';
import { Length } from './length';
import { Checkboxes } from './checkboxes';
import { Strength } from './strength';

// Styles
import * as classes from './form-generate.module.css';

const FormGenerate: FC = observer(() => {
  return (
    <form className={classes.form}>
      <Section title="Strength" description="Use ← → for quick setup">
        <Strength />
      </Section>
      <Section title="Custom" description="Make custom password">
        <Checkboxes className={classes.checkboxes} />
        <Length />
      </Section>
      <Button className={classes.submit} description="Or press ↩︎ ENTER">
        Generate
      </Button>
    </form>
  )
})

export { FormGenerate };
