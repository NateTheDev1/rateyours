import { hydrate, render } from 'react-dom';

import './normalize.scss';
import './tailwind.css';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
	hydrate(<h1>Hello</h1>, rootElement);
} else {
	render(<h1>Hello</h1>, rootElement);
}
