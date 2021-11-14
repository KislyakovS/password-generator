import { css } from '@emotion/react';

const titleStyle = css({
  color: 'red',
  margin: 0,
});

const App = () => <h1 css={titleStyle}>Hello world</h1>;

export { App };
