import React from 'react';
import { Picky } from 'react-picky';
import 'react-picky/dist/picky.css';

class DropdownMenus extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};

	}

	componentDidMount(){

	}

	render(){
		return(
				<div className="selectGroup">
					<div className='Pulse_form-group'>
						<label>Facility:</label>
						<span><Picky
						  id="picky"
						  options={["Bowling Green Sealing", 2, 3, 4, 5]}
						  value={[]}
						  multiple={true}
						  includeSelectAll={true}
						  includeFilter={true}
						  onChange={values => console.log(values)}
						  dropdownHeight={300}
						/></span>
					</div>

					<div className='Pulse_form-group'>
						<label>Manufacturing Process:</label>
						<span><Picky
						  id="picky"
						  options={["Extrusion", 2, 3, 4, 5]}
						  value={[]}
						  multiple={true}
						  includeSelectAll={true}
						  includeFilter={true}
						  onChange={values => console.log(values)}
						  dropdownHeight={300}
						/></span>
					</div>
					 
					<div className='Pulse_form-group'>
						<label>Cell:</label>
						<span><Picky
						  id="picky"
						  options={["DD8", 2, 3, 4, 5]}
						  value={[]}
						  multiple={true}
						  includeSelectAll={true}
						  includeFilter={true}
						  onChange={values => console.log(values)}
						  dropdownHeight={300}
						/></span>
					</div>
					<button type="button" className='autoBtn'>Auto </button>
				</div>
			);
	}
}

export default DropdownMenus