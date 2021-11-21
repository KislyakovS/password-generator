// Core
import { FC, useState } from 'react';

// Components
import { Section, Range, Checkbox, Button, Input } from '../../ui';

// Styles
import * as classes from './form-generate.module.css';

const MIN = 1;
const MAX = 4;
const STEP = 1;

const FormGenerate: FC = () => {
  const [type, setType] = useState(1);
  const [length, setLength] = useState(12)

  return (
    <form className={classes.form}>
      <Section title="Strength" description="Use ← → for quick setup">
        <Range
          value={type}
          min={MIN}
          max={MAX}
          step={STEP}
          marks={['Bad', 'Low', 'Medium', 'High']}
          onChange={setType}
        />
      </Section>
      <Section title="Custom" description="Make custom password">
        <div className={classes.chekcboxs}>
          <Checkbox
            name="uppercase"
            checked={true}
            onChange={() => { }}
          >
            Uppercase
          </Checkbox>
          <Checkbox
            name="lowercase"
            checked={false}
            onChange={() => { }}
          >
            Lowercase
          </Checkbox>
          <Checkbox
            name="numbers"
            checked={false}
            onChange={() => { }}
          >
            Numbers
          </Checkbox>
          <Checkbox
            name="symbols"
            checked={false}
            onChange={() => { }}
          >
            Symbols
          </Checkbox>
        </div>
        <div className={classes.length}>
          <Range
            className={classes.lengthRange}
            value={length}
            min={1}
            max={100}
            onChange={setLength}
          />
          <Input className={classes.lengthInput} value={length} />
        </div>
      </Section>
      <Button className={classes.submit} description="Or press ↩︎ ENTER">
        Generate
      </Button>
    </form>
  )
}

export { FormGenerate };
