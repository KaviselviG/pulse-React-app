import React from 'react';

class StatusBar extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};

	}

	componentDidMount(){

	}

	render(){
		return(
				<div className='runningProd'>
					Running - Production
				</div>
			);
	}
}

export default StatusBar