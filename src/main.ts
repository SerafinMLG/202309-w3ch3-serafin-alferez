
import { List } from './models/list';
import './scss/styles.scss';

import { Header } from './components/header';
import { Footer } from './components/footer';

function main() {
  // eslint-disable-next-line no-new
  new Header('.app');
  // eslint-disable-next-line no-new
  new List('.app');
  // eslint-disable-next-line no-new
  new Footer('.app');
}

main();


