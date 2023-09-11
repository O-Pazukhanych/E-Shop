import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegisterPage } from "./Routes.js";

import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;