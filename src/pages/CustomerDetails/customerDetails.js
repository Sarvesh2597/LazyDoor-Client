import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, Progress, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

// import UserBox from './UserBox';
// import Activities from './Activities';
// import Messages from './Messages';
// import Projects from './Projects';
// import Tasks from './Tasks';
import customerall from './customerall';
import customeractive from './customeractive';
// import Files from './Files';

class customerDetails extends Component {
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
                            breadCrumbItems={[
                                { label: 'Pages', path: '/pages/profile' },
                                { label: 'Profile', path: '/pages/profile', active: true },
                            ]}
                            title={'Customer Details'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <Card className="">
                            <CardBody className="profile-user-box">
                                <Row>
                                    <Col>
                                        <div className="text-center mt-3">
                                            {/* <img src={profileImg} alt=""
                                        className="avatar-lg rounded-circle" /> */}
                                            <h5 className="mt-2 mb-0">Shreyu N</h5>
                                            <h6 className="text-muted font-weight-normal mt-2 mb-0">User Experience Specialist</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 mb-4">San Francisco, CA</h6>


                                            <button type="button" className="btn btn-primary btn-sm mr-1">Edit</button>
                                            <button type="button" className="btn btn-white btn-sm">Delete</button>
                                        </div>



                                        <div className="mt-3 pt-2 border-top">
                                            <h4 className="mb-3 font-size-15">Contact Information</h4>
                                            <div className="table-responsive">
                                                <table className="table table-borderless mb-0 text-muted">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Email</th>
                                                            <td>xyz123@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Phone</th>
                                                            <td>(123) 123 1234</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Address</th>
                                                            <td>1975 Boring Lane, San Francisco, California, United States -
                                                            94108</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={9}>
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
                                            Active Orders
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '2' })}
                                            onClick={() => {
                                                this.toggleTab('2');
                                            }}>
                                            All Orders
                                </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <customeractive />
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <customerall />
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </React.Fragment>
        );
    }
}

export default customerDetails;
