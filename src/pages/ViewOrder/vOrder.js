import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

import DailyOrder from './DailyOrder';
import AdhocOrder from './AdhocOrder';

class vOrder extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    /**
     * Toggles tab
     * @param {*} tab
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            title={'Active Orders'}
                        />
                    </Col>
                </Row>

                <Card>
                    <CardBody>
                        <Nav className="nav nav-pills navtab-bg nav-justified">
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classNames({ active: this.state.activeTab === '1' })}
                                    onClick={() => {
                                        this.toggleTab('1');
                                    }}>
                                    Daily Orders                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classNames({ active: this.state.activeTab === '2' })}
                                    onClick={() => {
                                        this.toggleTab('2');
                                    }}>
                                    Ad-hoc Orders                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <DailyOrder />
                            </TabPane>
                            <TabPane tabId="2">
                                <AdhocOrder />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default vOrder;
