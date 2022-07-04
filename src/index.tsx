import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import * as serviceWorkerRegistration from './service-worker-registration';

import '../public/styles/global.css';
import '../public/styles/themes.css';

const app = document.getElementById('app');
ReactDOM.render(<App />, app);

serviceWorkerRegistration.register();
