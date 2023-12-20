import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './pages/Home';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
);
