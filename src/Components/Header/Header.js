import React from 'react';
import StatusBar from './StatusBar/StatusBar';
import DropdownMenus from './DropdownMenus/DropdownMenus';
import DescriptionBar from './DescriptionBar/DescriptionBar';
import home from '../../assets/images/home.png'
import backArrow from '../../assets/images/backarrow.png'

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};

	}

	componentDidMount(){

	}

	render(){
		return(
			
			
				<div>
					<StatusBar/>
					<div className="Dropdown_row">
						<div><img src={home} alt="home" className="home"/></div>
						<div><img src={backArrow} alt="home" className="back"/></div>
						<DropdownMenus/>
					</div>
					<DescriptionBar/>
				</div>
				
			);
	}
}

export default Header