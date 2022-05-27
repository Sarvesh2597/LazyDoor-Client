import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import {
    Row, Col, Card, CardBody, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, CustomInput,
    Form,
    FormGroup,
    Label,
    FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
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
        location: 'Baner',
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
        dataField: 'googleMapLink',
        text: ' Address',
        sort: false,
    },
    {
        dataField: 'detailedAddress',
        text: 'Detailed Address',
        sort: false,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
    },
    {
        dataField: 'comments',
        text: 'Comments',
        sort: false,
    },
    {
        dataField: 'paymentMode',
        text: 'PaymentMode',
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
class Customers extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()],
            modal: false,
            records: [],
            fullname: "",
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }


    /**
   * Show/hide the modal
   */
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    /**
     * Opens large modal
     */
    openModalWithSize = size => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = className => {
        this.setState({ className: className, size: null });
        this.toggle();
    };


    setPaymentMethod = value => {
        this.setState({ paymentMode: value });
    }

    addCustomer = (e) => {
        if (e) {
            const currentRecord = {
                id: this.state.records.length + 1,
                name: this.state.fullname,
                googleMapLink: this.state.googleMapLink,
                phone: this.state.contactNo,
                comments: this.state.comments,
                paymentMode: this.state.paymentMode
            }

            this.state.records.push(currentRecord);
            this.setState({
                fullname: '',
                googleMapLink: '',
                phone: '',
                comments: '',
                paymentMode: ''
            })
            console.log(this.state);
            this.toggle();
        }

    }

    render() {

        const TableWithSeletableRows = () => {
            const selectRow = {
                mode: 'checkbox',
                clickToSelect: true,
                style: { backgroundColor: '#727cf5', color: '#fff' },
            };

            return (
                <Card>
                    <CardBody>
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            bordered={false}
                            data={this.state.records}
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
                            <h4 className="mb-1 mt-0">Customers</h4>
                        </Col>
                        <Col sm={8} xl={6}>
                            <form className="form-inline float-sm-right mt-3 mt-sm-0">
                                {/* <div className="form-group mb-sm-0 mr-2">
                                    <Flatpickr value={this.state.filterDate}
                                        onChange={date => { this.setState({ filterDate: date }) }} options={{ mode: "range" }}
                                        className="form-control" />
                                </div> */}
                                <button type="button" className="btn btn-danger mr-4 mb-3  mb-sm-0" onClick={() => this.openModalWithSize('md')}><i className="uil-plus mr-1"></i> Add Customer</button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <TableWithSeletableRows />
                        </Col>
                    </Row>
                </div>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.toggle}>Add Customer</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col lg={12}>
                                <Form>
                                    <FormGroup>
                                        <Label for="text">Full Name</Label>
                                        <Input type="text" name="text" id="text" placeholder="Enter full name here" onChange={e => { this.setState({ fullname: e.target.value }) }} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Google Maps Address Link</Label>
                                        <Input type="text" name="address" id="exampleEmail" placeholder="Enter google maps link here" onChange={e => { this.setState({ googleMapLink: e.target.value }) }} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Detailed Address</Label>
                                        <Input type="textarea" name="address" id="detailedaddress" placeholder="Enter detailed address here" onChange={e => { this.setState({ googleMapLink: e.target.value }) }} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleEmail">Contact Number</Label>
                                        <Input type="tel" name="contact" id="exampleEmail" placeholder="Enter contact number here" onChange={e => { this.setState({ contactNo: e.target.value }) }} />
                                    </FormGroup>


                                    <FormGroup>
                                        <Label for="exampleCheckbox">Payment Method</Label>
                                        <Row>
                                            <Col sm={6}>
                                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Online" onChange={e => this.setPaymentMethod('Online')} />
                                            </Col>
                                            <Col sm={6}>
                                                <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="COD" onChange={e => this.setPaymentMethod('COD')} />
                                            </Col>
                                        </Row>

                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={e => this.addCustomer(e)}>Submit</Button>
                        {/* <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}


export default Customers;