import React from 'react';
import '../css/header.css';
import {headerTitle, headerDescription} from '../stringVariables/HomeStringVariables';

const Header = (props) => {
	return (
		<div className="header">
			<div className="header-title">
				
				<h1 className="bold">{headerTitle}</h1>
			</div>
			<div className="header-description">
				<h2>
					{headerDescription}
				</h2>
			</div>
			<button className="get-started">
				<p className="bold">Get started</p>
			</button>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
