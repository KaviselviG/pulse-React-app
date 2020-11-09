import React from 'react';
import Table from 'react-bootstrap/Table';
import {Modal,Form} from 'react-bootstrap';

class DataTable extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}

	componentDidMount(){

	}

	renderTableData = () => {
         return (<tbody>
            										<tr>
            										<td>06:00 - 06:58</td>
				   									<td> </td>
				   									<td>60009331</td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0.0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td>%</td>
				   									<td><span className='greyCell'>0</span></td>
													<td><span className='greyCell'>59.3</span></td>
				   									<td className='idle'>Idle</td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td className='added'>+Add Notes</td>
													<td></td>
													<td></td>
													<td></td>
				   									</tr>

				   									<tr>
				   									<td>07:00 - 07:58</td>
				   									<td> </td>
				   									<td>60009330</td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0.0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td><span className='greyCell'>0.0</span></td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td>%</td>
				   									<td><span className='greyCell'>0.0</span></td>
				   									<td><span className='greyCell'>1.7</span></td>
													<td className='idle'>Idle</td>
													<td><span className='greyCell'>0</span></td>
				   									<td className='added'>+Add Notes</td>
													<td></td>
													<td></td>
													<td></td>
				   									</tr>

				   									<tr>
				   									<td>08:00 - 08:58</td>
				   									<td> </td>
				   									<td>60009330</td>
				   									<td><span className='greyCell'>640</span></td>
				   									<td><span className='greyCell'>785</span></td>
				   									<td><span className='greyCell'>219.0</span></td>
				   									<td><span className='greyCell'>0</span></td>
													<td><span className='greyCell'>0</span></td>
													<td><span className='greyCell'>0</span></td>
				   									<td>%</td>
				   									<td><span className='greyCell'>0</span></td>
													<td><span className='greyCell'>60</span></td>
				   									<td className='notadded'>Not Added</td>
				   									<td><span className='greyCell'>0</span></td>
				   									<td className='added'>+Add Notes</td>
													<td></td>
													<td></td>
													<td></td>
				   									</tr>


				   									
				   				</tbody>
         )
   }

	render(){
		return(
				<div>
					<Table responsive className='custom_table'>
				          <thead>
				          				            <tr className='mainHead'>
				          				            <th>Time Slot</th>
				   									<th>Profile</th>
				   									<th>Part</th>
				   									<th>Forecast</th>
				   									<th>Good</th>
				   									<th>Good</th>
													<th>PLC</th>
				   									<th colspan='2'>Scrap</th>
													   <th>%</th>
				   									<th>Run Time</th>
				   									<th>Down Time</th>
													   <th></th>
				   									<th>OEE</th>
				   									<th>Notes</th>
				   									<th className='shiftHeadBg'><span>Shift 1</span></th>
				   									<th className='shiftHead'><span>Shift 2</span></th>
				   									<th className='shiftHead'><span>Shift 3</span></th>
				   									</tr>
												<tr className='subHead'>
				          				            <th></th>
				   									<th></th>
				   									<th></th>
				   									<th>Meter</th>
				   									<th>Meter</th>
				   									<th>Pieces</th>
				   									<th></th>
				   									<th>Manual</th>
				   									<th>Total</th>
				   									<th></th>
				   									<th></th>
				   									<th></th>
													   <th></th>
				   									<th>%</th>
				   									<th></th>
				   									<th className='shiftHeadBg'><span>05-11</span></th>
				   									<th className='shiftHead'><span>04-11</span></th>
				   									<th className='shiftHead'><span>04-11</span></th>
				   								  </tr>
				          				          </thead>
				          				           	{this.renderTableData()}
				        </Table>
				</div>
			);
	}
}

export default DataTable;