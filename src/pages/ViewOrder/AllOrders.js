import React, { useEffect, useState } from 'react';
import { Card, CardBody, Table, Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';

import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { fetchJSON } from '../../helpers/api';
import { BASE_URL } from '../../constants/endpoints';

const AllOrders = () => {

	const [records, setRecords] = useState([])

	useEffect(() => {
		getAllOrders();
	}, []);


	const getAllOrders = async () => {
		setRecords([])
        const res = await fetchJSON(BASE_URL+'/order/merchant/list/all')
        if(res.success) {
			console.log(res)
            setRecords(res.orders)
        }
	}


	return (
		<React.Fragment>
			<Row className="page-title">
				<Col md={12}>
					<PageTitle
						title={'All Orders'}
					/>
				</Col>
			</Row>

			<Card>
				<CardBody className="pb-0">

					<Table hover responsive className="mt-4">
						<thead>
							<tr>
								<th scope="col">Sr No.</th>
								<th scope="col">Customer Name</th>
								<th scope="col">Customer Email</th>
								<th scope="col">Drop Address</th>
								<th scope="col">Customer Contact</th>
								<th scope="col">Type</th>
							</tr>
						</thead>
						<tbody>
							{records.map((record, index)=>
							<tr>
								<td>{index+1}</td>
								<td>{record.customerName}</td>
								<td>{record.customerEmail}</td>
								<td>{record.dropAddress.detailedAddress}</td>
								<td>{record.customerContact}</td>
								<td>
									{record.pickupDate? <span className="badge badge-soft-success py-1">Ad-hoc</span>: <span className="badge badge-soft-warning py-1">Daily</span>}
									
								</td>
							</tr>)}
								
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</React.Fragment>
	);
};

export default AllOrders;
