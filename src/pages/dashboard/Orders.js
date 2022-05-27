import React, { useEffect, useState } from 'react';
import { Card, CardBody, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import details from '../OrderDetails/details';
import { fetchJSON } from '../../helpers/api';
import { BASE_URL } from '../../constants/endpoints';
import * as moment from 'moment'

const Orders = () => {

    const [records, setRecords] = useState([])

    useEffect(() => {
        getTodaysOrders();
    }, []);

    const getTodaysOrders = async () => {
        setRecords([])
        const res = await fetchJSON(BASE_URL+'/order/merchant/list/today')
        if(res.success) {
            setRecords(res.orders)
        }
    }


    return (
        <Card>
            <CardBody className="pb-0">
                <Button onClick={()=>getTodaysOrders()} className="float-right" size={'sm'} color="primary">
                    {/* <i className='uil uil-export ml-1'></i>  */}
                    Refresh
                </Button>

                <h5 className="card-title mt-0 mb-0 header-title">Today's Orders</h5>

                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Email</th>
                            <th scope="col">Customer Contact</th>
                            <th scope="col">External Id</th>
                            <th scope="col">Drop Location</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delivered on</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((record, index) => {
                            const status = record.status.length === 0 ? 'Not Started': record.status[record.status.length-1].value;
                            const statusTime = record.status.length === 0 ? 0 : moment(record.status[record.status.length - 1].time).format('LT');
                            const issueLink = record.status.length > 0 && record.status[record.status.length - 1].imageUrl ? record.status[record.status.length - 1].imageUrl : ''
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{record.customerName}</td>
                                    <td>{record.customerEmail}</td>
                                    <td>{record.customerContact}</td>
                                    <td>121</td>
                                    <td>{record.dropAddress.detailedAddress}</td>
                                    <td>{status === 'Delivered with issues' ? <a target="_blank" href={issueLink}>Delivered with additional info</a> : status}</td>
                                    <td>{status.includes('Delivered') ? statusTime : 'NA'}</td>
                                    {/* <td><span className={`${record.status === 'Pending' ? 'badge badge-soft-warning py-1' : 'badge badge-soft-success py-1'}`} >{record.status}</span></td> */}
                                </tr>
                            );
                        })}
                        {/* <tr>
                            <td>#98754</td>
                            <td>ASOS Ridley High</td>
                            <td>Otto B</td>
                            <td>$79.49</td>
                            <td><span className="badge badge-soft-warning py-1">Pending</span></td>
                        </tr>
                        <tr>
                            <td>#98753</td>
                            <td>Marco Lightweight Shirt</td>
                            <td>Mark P</td>
                            <td>$125.49</td>
                            <td><span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>#98752</td>
                            <td>Half Sleeve Shirt</td>
                            <td>Dave B</td>
                            <td>$35.49</td>
                            <td><span className="badge badge-soft-danger py-1">Declined</span>
                            </td>
                        </tr>
                        <tr>
                            <td>#98751</td>
                            <td>Lightweight Jacket</td>
                            <td>Shreyu N</td>
                            <td>$49.49</td>
                            <td><span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>#98750</td>
                            <td>Marco Shoes</td>
                            <td>Rik N</td>
                            <td>$69.49</td>
                            <td><span className="badge badge-soft-danger py-1">Declined</span>
                            </td>
                        </tr> */}
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
};

export default Orders;
