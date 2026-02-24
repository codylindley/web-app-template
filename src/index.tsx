// Import global CSS which declares Panda CSS cascade layers and base body styles
import './App.css';
import { render } from 'solid-js/web';
import App from './App.tsx';

// Mount the SolidJS application into the #root element defined in index.html
render(() => <App />, document.getElementById('root')!);
