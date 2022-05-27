import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../components/PageTitle';


const records = [
    {
        id: 1,
        age: 32,
        name: 'Shivkant Kadam',
        location: 'Narhe',
        phone: '+91 (823) 532-2427',
    },
    {
        id: 2,
        age: 23,
        name: 'Abhishek Muley',
        location: 'Bavdhan',
        phone: '+91 (813) 583-2089',
    },
    {
        id: 3,
        age: 31,
        name: 'Pranav Borole',
        location: 'Katraj',
        phone: '+91 (975) 468-3875',
    },
    {
        id: 4,
        age: 24,
        name: 'Jeet Patel',
        location: 'Bane',
        phone: '+91 (891) 537-3461',
    },
    {
        id: 5,
        age: 25,
        name: 'Krishna Sapkal',
        location: 'Vadgaon(BK)',
        phone: '+91 (916) 522-3747',
    },
    {
        id: 6,
        age: 20,
        name: 'Salman Khan',
        location: 'Nanded City',
        phone: '+91 (876) 492-3181',
    },

];

const columns = [
    {
        dataField: 'id',
        text: 'Customer ID',
        sort: true,
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'location',
        text: ' Location',
        sort: false,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
    }

];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);
class Schedule extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()]
        };
    }

    render() {

        const TableWithSeletableRows = () => {
            const selectRow = {
                mode: 'checkbox',
                clickToSelect: true,
                selected: [1, 2, 3, 4, 5, 6],
                style: { backgroundColor: '#727cf5', color: '#fff' },
            };

            return (
                <Card>
                    <CardBody>
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            bordered={false}
                            data={records}
                            columns={columns}
                            pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                            selectRow={selectRow}
                            wrapperClasses="table-responsive"
                        />
                    </CardBody>
                </Card>
            );
        };

        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Delivery Schedules</h4>
                            <h6>(You can edit this till 9 AM tomorrow.)</h6>
                        </Col>

                    </Row>
                    <Row>
                        <Col xl={12}>
                            <TableWithSeletableRows />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}


export default Schedule;