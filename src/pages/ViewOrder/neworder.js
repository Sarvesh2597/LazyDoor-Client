import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import Flatpickr from 'react-flatpickr'

import PageTitle from '../../components/PageTitle';
import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import Select from 'react-select';
import { fetchJSON } from '../../helpers/api';
import { BASE_URL } from '../../constants/endpoints';
import { Redirect } from 'react-router-dom';

const Neworder = () => {
	const [online, setOnline] = useState(true);
	const [cod, setCod] = useState(false);
	const [deliveryAgents, setDeliveryAgents] = useState([])
	const [selectedDeliveryAgent, setSelectedDeliveryAgent] = useState('')
	const [pickupDate, setPickupDate] = useState(new Date())
	const [pickupTime, setPickupTime] = useState(new Date())
	const [created, setCreated] = useState(false)

	const onlineChanged = (e) => {
		setOnline(e.currentTarget.value);
		setCod(!e.currentTarget.value);
	};

	const codChanged = (e) => {
		setOnline(!e.currentTarget.value);
		setCod(e.currentTarget.value);
	};

	const handleValidSubmit = async (event, values) => {
		console.log(values)
		const regex = new RegExp(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d?)+z/g);
		const lon_lat_match = values.dropAddressLink.match(regex);
		const latitude = lon_lat_match[0].split(',')[0].replace('@','');
		const longitude = lon_lat_match[0].split(',')[1];
		const time = pickupTime.toISOString();
		const dataToSend = {
			...values,
			dropAddress: {
				detailedAddress: values.dropAddress,
				googleMapsLink: values.dropAddressLink,
				location: [Number(longitude), Number(latitude)],
			},
			pickupDate: pickupDate.toISOString(),
			pickupTime: time,
			deliveryAgent: selectedDeliveryAgent,
			paymentMethod: cod ? 'cod' : 'online',
		};
		delete dataToSend.dropAddressLink;
		console.log(dataToSend)
		const res = await fetchJSON(BASE_URL + '/order/create/adhoc', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(dataToSend)
		});

		if (res.success) {
			setCreated(true);
		}
	}

	useEffect(() => {
		getDeliveryAgents()
	}, []);

	const getDeliveryAgents = async () => {
		const res = await fetchJSON(BASE_URL + '/user/merchant/deliveryagents');
		if (res.success) {
			setDeliveryAgents(res.deliveryAgents.map(element => ({ value: element._id, label: element.fullName })));
		}
	}

	if (created) {
		return <Redirect to="/" />
	}

	return (
		<div>
			{' '}
			<Row className="page-title align-items-center">
				<Col sm={4} xl={6}>
					<h4 className="mb-1 mt-0">Create Ad-hoc Order</h4>

				</Col>

			</Row>
			<AvForm onValidSubmit={handleValidSubmit}>
				<Card>
					<CardBody>
						<Row>
							<Col lg={6}>
								<AvGroup>
									<Label for="customerName">Customer Name:</Label>
									<AvInput type="text" name="customerName" id="customerName">
									</AvInput>
								</AvGroup>

								<AvGroup>
									<Label for="customerContact">Customer Contact:</Label>
									<AvInput type="text" name="customerContact" id="customerContact">
									</AvInput>
								</AvGroup>
								<AvGroup>
									<Label for="customerEmail">Customer Email:</Label>
									<AvInput type="email" name="customerEmail" id="customerEmail">
									</AvInput>
								</AvGroup>
								<AvGroup>
									<Label for="dropAddressLink">Google Map Address Link: </Label>
									<AvInput type="text" name="dropAddressLink" id="dropAddressLink">
									</AvInput>
								</AvGroup>
								<AvGroup>
									<Label for="dropAddress">Detailed Drop Address:</Label>
									<AvInput type="textarea" name="dropAddress" id="dropAddress" />
								</AvGroup>
							</Col>
							<Col lg={6}>
								<AvGroup>
									<label>Enter Pick up time for order:</label> <br />
									<Flatpickr value={pickupTime} options={{ enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true }}
										onChange={date => { setPickupTime(new Date(date)) }}
										className="form-control" />
								</AvGroup>
								<AvGroup>
									<label>Pick up date:</label> <br />
									<Flatpickr value={pickupDate}
										onChange={date => { setPickupDate(new Date(date)) }}
										className="form-control" />
								</AvGroup>
								<AvGroup>
									<Label for="exampleSelect">Delivery Agent: </Label>
									<Select
										onChange={(element) => setSelectedDeliveryAgent(element.value)}
										// value={client}
										className="react-select"
										classNamePrefix="react-select"
										options={deliveryAgents}></Select>
									{/* <AvInput type="select" name="select" id="exampleSelect">
									</AvInput> */}
								</AvGroup>
								<AvGroup>
									<Label for="externalId">External ID:</Label>
									<AvInput type="text" name="externalId" id="externalId" />
								</AvGroup>
								<AvGroup>
									<Label for="exampleCheckbox" className="mt-3">
										Payment method:
                                    </Label>
									<div>
										<Row>
											<Col lg={2}>
												<CustomInput
													type="radio"
													onChange={onlineChanged}
													checked={online}
													id="exampleCustomRadio"
													label="Online"
												/>
											</Col>

											<CustomInput
												type="radio"
												id="exampleCustomRadio2"
												label="COD"
												checked={cod}
												onChange={codChanged}
											/>
										</Row>
									</div>
								</AvGroup>
							</Col>
						</Row>

						<div className="submit mt-4">
							<Button color="primary" className="float-right" type="submit">
								Send for approval
                        </Button>
						</div>
					</CardBody>
				</Card>
			</AvForm>
		</div>
	);
};

export default Neworder;
