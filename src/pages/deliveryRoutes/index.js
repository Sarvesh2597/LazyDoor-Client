import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, TabContent, TabPane, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

import editRoutes from '../deliveryRoutes/editRoutes';

class DeliveryRoutes extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()],
            activeTab: '1'
        };
    }



    /**
     * Toggles tab
     * @param {*} tab 
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const Activity = (item) => {
            return <div className="pb-4">
                <div className="media">
                    <div className="event-date text-center mr-4">
                        <div className="bg-soft-primary p-1 rounded text-primary font-size-14">{item.location}</div>
                    </div>
                    <div className="media-body">
                        <h6 className="font-size-15 mt-0 mb-1">{item.name}</h6>
                        <h7 className="font-size-15 mt-0 mb-1">{item.phone}</h7>
                        <p className="text-muted font-size-14">{item.address}</p>
                    </div>
                </div>
            </div>
        }


        const activities = [
            {
                id: 1,
                age: 32,
                name: 'Shivkant Kadam',
                location: 'Narhe',
                phone: '+91 (823) 532-2427',
                address: 'Near Narhe Police Station, Narhe,Pune - 41.'
            },
            {
                id: 2,
                age: 23,
                name: 'Abhishek Muley',
                location: 'Bavdhan',
                phone: '+91 (813) 583-2089',
                address: 'The Hillside, Bavdhan,Pune - 41.'
            },
            {
                id: 3,
                age: 31,
                name: 'Pranav Borole',
                location: 'Katraj',
                phone: '+91 (975) 468-3875',
                address: 'Siddhant Apartments, Katraj,Pune - 41.'
            },
            {
                id: 4,
                age: 24,
                name: 'Jeet Patel',
                location: 'Baner',
                phone: '+91 (891) 537-3461',
                address: 'KP Villas, Baner,Pune - 41.'
            },
            {
                id: 5,
                age: 25,
                name: 'Krishna Sapkal',
                location: 'Vadgaon(BK)',
                phone: '+91 (916) 522-3747',
                address: 'Sinhgad College Hostel, Vadgaon (BK),Pune - 41.'
            },
            {
                id: 6,
                age: 20,
                name: 'Salman Khan',
                location: 'Nanded City',
                phone: '+91 (876) 492-3181',
                address: 'Asawari - D-23, Nanded City,Pune - 41.'
            },

        ]


        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Delivery Routes</h4>
                        </Col>
                        <Col sm={8} xl={6}>
                            <form className="form-inline float-sm-right mt-3 mt-sm-0">
                                {/* <div className="form-group mb-sm-0 mr-2">
                                    <Flatpickr value={this.state.filterDate}
                                        onChange={date => { this.setState({ filterDate: date }) }} options={{ mode: "range" }}
                                        className="form-control" />
                                </div> */}
                                <Link to={'/editRoutes'}><button type="button" className="btn btn-danger mr-4 mb-3  mb-sm-0">Edit Route</button></Link>
                            </form>
                        </Col>
                    </Row>
                    <Row>


                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Nav className="nav nav-pills navtab-bg nav-justified">
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggleTab('1'); }}
                                            >Route 1</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: this.state.activeTab === '2' })}
                                                onClick={() => { this.toggleTab('2'); }}
                                            >Route 2</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: this.state.activeTab === '3' })}
                                                onClick={() => { this.toggleTab('3'); }}
                                            >Route 3</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: this.state.activeTab === '4' })}
                                                onClick={() => { this.toggleTab('4'); }}
                                            >Route 4</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: this.state.activeTab === '5' })}
                                                onClick={() => { this.toggleTab('5'); }}
                                            >Route 5</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <div className="left-timeline mt-3 mb-3 pl-4">
                                                <ul className="list-unstyled events mb-0">
                                                    {activities.map((item, idx) => {
                                                        return <li className="event-list" key={idx}>
                                                            <Activity {...item} />
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="left-timeline mt-3 mb-3 pl-4">
                                                <ul className="list-unstyled events mb-0">
                                                    {activities.map((item, idx) => {
                                                        return <li className="event-list" key={idx}>
                                                            <Activity {...item} />
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <div className="left-timeline mt-3 mb-3 pl-4">
                                                <ul className="list-unstyled events mb-0">
                                                    {activities.map((item, idx) => {
                                                        return <li className="event-list" key={idx}>
                                                            <Activity {...item} />
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <div className="left-timeline mt-3 mb-3 pl-4">
                                                <ul className="list-unstyled events mb-0">
                                                    {activities.map((item, idx) => {
                                                        return <li className="event-list" key={idx}>
                                                            <Activity {...item} />
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <div className="left-timeline mt-3 mb-3 pl-4">
                                                <ul className="list-unstyled events mb-0">
                                                    {activities.map((item, idx) => {
                                                        return <li className="event-list" key={idx}>
                                                            <Activity {...item} />
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}


export default DeliveryRoutes;