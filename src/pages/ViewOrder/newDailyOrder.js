import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import Flatpickr from 'react-flatpickr'
import csv from 'csv';

import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

import Select from 'react-select';
import { fetchJSON } from '../../helpers/api';
import { BASE_URL } from '../../constants/endpoints';
import { Redirect } from 'react-router-dom';


const NewDailyOrder = () => {
	// const [sameDay, setsameDay] = useState(false);
	// const [express, setexpress] = useState(false);

	const [csvData, setCsvData] = useState([]);
	const [uploaded, setUploaded] = useState(false);

	// const expressChanged = (e) => {
	// 	setexpress(e.currentTarget.value);
	// 	setsameDay(!e.currentTarget.value);
	// };

	// const sameDayChanged = (e) => {
	// 	setexpress(!e.currentTarget.value);
	// 	setsameDay(e.currentTarget.value);
	// };

	const processCsv = (files) => {
		const reader = new FileReader();
		reader.onload = () => {
			csv.parse(reader.result, (err, data) => {
				let keys = data.shift();
				data = data.map(function (row) {
					return keys.reduce(function (obj, key, i) {
						obj[key] = row[i];
						return obj;
					}, {});
				});
				setCsvData(data);
			});
		};

		reader.readAsBinaryString(files[0]);
	}

	const mapAndSendData = async () => {

		const dataToSend = csvData.map(element => {
			const regex = new RegExp(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d?)+z/g);
			const lon_lat_match = element['Address - Google Maps Link'].match(regex);
			const latitude = lon_lat_match[0].split(',')[0].replace('@','');
			const longitude = lon_lat_match[0].split(',')[1];
			return {
				customerContact: element['Contact Number'],
				customerName: element['Customer Name'],
				customerEmail: element['Email Address'],
				dropAddress: {
					detailedAddress: element['Detailed Address'],
					googleMapsLink: element['Address - Google Maps Link'],
					location: {
						type: 'Point',
						coordinates: [Number(longitude), Number(latitude)]
					},
				},
				comments: element['Comments'] || 'none'
			}
		});
		const res = await fetchJSON(BASE_URL + '/order/create/daily', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(dataToSend)
		});

		if (res.success) {
			setUploaded(true)
		}
	}

	if (uploaded) {
		return <Redirect to='/dashboard' />
	}

	return (
		<div>
			{' '}
			<Row className="page-title align-items-center">
				<Col sm={4} xl={6}>
					<h4 className="mb-1 mt-0">Create Daily Order</h4>

				</Col>

			</Row>
			<Card>
				<CardBody>
					<FileUploader
						onFileUpload={processCsv}
					/>
					<Button onClick={mapAndSendData} color="primary" className="float-right mt-4" type="submit">
						Send for approval
                        </Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default NewDailyOrder;
