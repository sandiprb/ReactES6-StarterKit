/*jshint esversion: 6 */

import React from 'react';
import {render} from 'react-dom';

import Hero from './components/Hero.jsx';


class App extends React.Component {
	render(){
		return <div>
			<Hero />
		</div>;
	}
}

render(<App />, document.getElementById("container"))