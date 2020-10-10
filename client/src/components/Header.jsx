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
				<img className = "header-img" src="./images/coursePreview.png"/>
			</div>
	
		</div>
	)
}

export default Header
export { default as Header } from './Header'
