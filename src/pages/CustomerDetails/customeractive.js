import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Customeractive = () => {
    return (
        <Card>
            <CardBody className="pb-0">
                <h5 className="card-title mt-0 mb-0 header-title">Recent Orders</h5>

                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Pickup Address</th>
                            <th scope="col">Drop Address</th>
                            <th scope="col">Customer Contact</th>
                            <th scope="col">Order Price</th>
                            <th scope="col">Shipment Type</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Person 1</td>
                            <td>Address 1</td>
                            <td>Address 2</td>
                            <td>987546632</td>
                            <td>300$</td>
                            <td>Express</td>
                            <td>
                                <span className="badge badge-soft-warning py-1">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Person 2</td>
                            <td className="pick_address">
                                Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052
                            </td>
                            <td>Address 2</td>
                            <td>987546632</td>
                            <td>100$</td>
                            <td>Express</td>
                            <td>
                                <span className="badge badge-soft-success py-1">Success</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Person 3</td>
                            <td>Address 1</td>
                            <td>Address 2</td>
                            <td>987546632</td>
                            <td>80$</td>
                            <td>Same Day</td>
                            <td>
                                <span className="badge badge-soft-danger py-1">Declined</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Customeractive;
