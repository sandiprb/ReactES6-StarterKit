import React from 'react';

class Hero extends React.Component {
	render(){
		return <div>
			<h1 className={this.props.className}>{this.props.text}</h1>
		</div>;
	}
}

Hero.defaultProps = {
	className : "hero",
	text: "Hello React"
}

module.exports = Hero;