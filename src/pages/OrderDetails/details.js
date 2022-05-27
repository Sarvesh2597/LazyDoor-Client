import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const details = () => {
	// const [sameDay, setsameDay] = useState(false);
	// const [express, setexpress] = useState(false);

	// const expressChanged = (e) => {
	// 	setexpress(e.currentTarget.value);
	// 	setsameDay(!e.currentTarget.value);
	// };

	// const sameDayChanged = (e) => {
	// 	setexpress(!e.currentTarget.value);
	// 	setsameDay(e.currentTarget.value);
	// };

	return (
		<div>
			{' '}
			<Row className="page-title align-items-center">
				<Col sm={4} xl={6}>
					<h4 className="mb-1 mt-0">Order Details</h4>

				</Col>

			</Row>
			<Card>
				<CardBody>
					{/* <h3 className="header-title mt-0 mb-4">Create Order</h3> */}


					<Row>
						<Col lg={6}>
							<Form>
								<FormGroup>
									<Label for="exampleSelect">Customer Name</Label>
									<Input type="text" name="select" id="exampleSelect" placeholder="Abhishek Muley" disabled>

									</Input>
								</FormGroup>


								<FormGroup>
									<Label for="detailAddress">Product specification:</Label>
									<Input type="textarea" id="detailAddress" rows="2" />
								</FormGroup>

								<FormGroup>
									<Label for="customerContact">Customer Contact Info :</Label>
									<Input type="tel" id="customerContact" disabled placeholder="00000-000000" />
								</FormGroup>
								<FormGroup>
									<Label for="orderPrice" className="mt-3">
										Order Price ($) :
                                    </Label>
									<Input type="tel" id="orderPrice" />
								</FormGroup>


								<FormGroup>
									<Label for="comment">Comment / Delivery Instructions :</Label>
									<Input type="textarea" id="comment" rows="2" />
								</FormGroup>


							</Form>
						</Col>

						<Col lg={6}>
							<Form>
								<FormGroup>
									<Label for="exampleSelect">Delivery Agent:</Label>
									<Input type="select" name="select" id="exampleSelect">
										<option>-- Select --</option>
										<option>Sanket</option>
										<option>Abhishek</option>
										<option>Sarvesh</option>
									</Input>
								</FormGroup>


								<FormGroup>
									<Label for="dropAddress">Drop Address :</Label>
									<Input type="textarea" id="dropAddress" rows="2" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleSelect">Routes:</Label>
									<Input type="select" name="select" id="exampleSelect">
										<option>-- Select --</option>
										<option>Route 1</option>
										<option>Route 2</option>
										<option>Route 3</option>
									</Input>
								</FormGroup>



								<FormGroup>
									<Label for="exampleCheckbox" className="mt-3">
										Payment method:
                                    </Label>

									<div>
										<Row>
											<Col lg={2}>
												<CustomInput
													type="radio"
													// onChange={sameDayChanged}
													// checked={sameDay}
													id="exampleCustomRadio"
													label="COD"
												/>
											</Col>

											<CustomInput
												type="radio"
												id="exampleCustomRadio2"
												label="Online"
											// checked={express}
											// onChange={expressChanged}
											/>
										</Row>
									</div>
								</FormGroup>
								{/* {express && (
									<FormGroup>
										<Label for="exampleTime">Time</Label>
										<Input type="time" name="time" id="exampleTime" placeholder="date Time" />
									</FormGroup>
								)} */}


							</Form>
						</Col>
					</Row>
					<div className="submit mt-4 mb-3">
						<Button color="primary" type="submit">
							Update and Save
                        </Button>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default details;
