// Core
import { FC } from "react";
import { observer } from "mobx-react-lite";

// Assets
import CopyIcon from "./icons/copy.svg";

// State
import { password } from "../../store/password";

// Styles
import * as classes from "./list-password.module.css";

const ListPassword: FC = observer(() => {
  if (password.passwords.length === 0) {
    return null;
  }

  return (
    <ul className={classes.list}>
      {password.passwords.map(p => (
        <li key={p} className={classes.item}>
          <div className={classes.line}>
            <span className={classes.password}>{p}</span>
            <button
              className={classes.button}
              onClick={() => navigator.clipboard.writeText(p)}
            >
              <CopyIcon />
              Click to copy
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
});

export { ListPassword };
