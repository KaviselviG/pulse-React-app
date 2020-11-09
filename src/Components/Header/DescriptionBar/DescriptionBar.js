import React from 'react';
import { Picky } from 'react-picky';
import 'react-picky/dist/picky.css';

class DescriptionBar extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};

	}

	componentDidMount(){

	}

	render(){
		return(
				<div class='descriptor_row'>
					<div className='descriptor_form-group'>
						<span>
							<Picky
								id="picky"
								options={[1, 2, 3, 4, 5]}
								value={[]}
								multiple={true}
								includeSelectAll={true}
								includeFilter={true}
								onChange={values => console.log(values)}
								dropdownHeight={300}
								/>
						</span>
						</div>
						<div className='descriptor_form-group'>
						<label>Part:</label>
						 
						<span>
							<input type='text' value='60009330' />
						</span>
						</div>
						<div className='descriptor_form-group'>
						<label>Description:</label>
						 
						<span>
							<input type='text' value='Door Seal' />
						</span>
						</div>
						<div className='descriptor_form-group'>
						<label>Target:</label>
						 
						<span>
							<input type='text' value='15.24' />
						</span>
						</div>

						<div className='descriptor_form-group'>
						<label>Actual:</label>
						 
						<span>
							<input type='text' value='21.98' /> (/min)
						</span>
						</div>
						
				</div>
			);
	}
}

export default DescriptionBar