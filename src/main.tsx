import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';
import './index.css';

// const fallback = <div>Loading...</div>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense fallback={<div>Loading...</div>}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>
);
