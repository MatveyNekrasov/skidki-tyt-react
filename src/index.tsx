import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<h1>Test building configure</h1>
	</StrictMode>
);
