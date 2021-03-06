import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, Lock, User, Users, Map, MapPin, Phone } from 'react-feather';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';
import { BASE_URL } from '../../constants/endpoints';
import { fetchJSON } from '../../helpers/api';

class Register extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = async (event, values) => {
        const regex = new RegExp(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d?)+z/g);
        const lon_lat_match = values.businessAddressLink.match(regex);
        const latitude = lon_lat_match[0].split(',')[0].replace('@','');
		const longitude = lon_lat_match[0].split(',')[1];

        const res = await fetchJSON(BASE_URL + '/user/merchant/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullName: values.fullname,
                phoneNumber: values.phoneNumber,
                email: values.email,
                password: values.password,
                businessName: values.companyname,
                businessType: values.busitype,
                businessAddress: [{
                    detailedAddress: values.businessAddress,
                    googleMapsLink: values.businessAddressLink,
                    location: {
                        type: 'Point',
                        coordinates: [Number(longitude), Number(latitude)]
                    }
                }]
            })
        });
        if (res.success) {
            this.props.registerUser(values.fullname, values.email, values.password);
        }
    }

    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/' />
        }
    }

    /**
     * Redirect to confirm
     */
    renderRedirectToConfirm = () => {
        return <Redirect to='/account/waiting' />;
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {Object.keys(this.props.user || {}).length > 0 && this.renderRedirectToConfirm()}

                {(this._isMounted || !isAuthTokenValid) && <div className="account-pages mt-5 mb-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={10}>
                                <Card className="">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col md={6} className="p-5 position-relative">
                                                { /* preloader */}
                                                {this.props.loading && <Loader />}

                                                <div className="mx-auto mb-5">
                                                    <a href="/">
                                                        <img src={logo} alt="" height="64" />
                                                    </a>
                                                </div>

                                                <h6 className="h5 mb-0 mt-4">Welcome to LazyDoor!</h6>
                                                <p className="text-muted mt-1 mb-4">Enter your details to continue.</p>


                                                {this.props.error && <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>}

                                                <AvForm onValidSubmit={this.handleValidSubmit} className="authentication-form">
                                                    <AvGroup className="">
                                                        <Label for="fullname">Full name</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <User className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="fullname" id="fullname" placeholder="Enter your name" required />
                                                        </InputGroup>

                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="">
                                                        <Label for="phoneNumber">Phone number</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Phone className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="phone" name="phoneNumber" id="phoneNumber" placeholder="Enter your Phone number" required />
                                                        </InputGroup>

                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="">
                                                        <Label for="email">Email</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Mail className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="email" name="email" id="email" placeholder="Enter your email" required />
                                                        </InputGroup>

                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>


                                                    <AvGroup className="mb-3">
                                                        <Label for="password">Password</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Lock className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="password" name="password" id="password" placeholder="Enter your password" required />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>

                                                    <AvGroup className="mb-3">
                                                        <Label for="companyname">Business Name</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <User className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="companyname" id="password" placeholder="Enter your Business Name" required />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="mb-3">
                                                        <Label for="busitype">Business Type</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Users className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="busitype" id="busitype" placeholder="Enter your Business Type" required />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>
                                                    <AvGroup className="mb-3">
                                                        <Label for="businessAddress">Detailed Address</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Map className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="textarea" name="businessAddress" id="businessAddress" placeholder="Enter your Business Address" required />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>

                                                    <AvGroup className="mb-3">
                                                        <Label for="businessAddressLink">Google maps address link</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <MapPin className="icon-dual" />
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput
                                                                validate={{
                                                                    pattern: { value: '@(.*),(.*),', errorMessage: 'Invalid maps url' },
                                                                }}
                                                                type="textarea"
                                                                name="businessAddressLink"
                                                                id="businessAddressLink"
                                                                placeholder="Paste google maps address link"
                                                                required />
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>

                                                    <AvGroup check className="mb-4">
                                                        <CustomInput type="checkbox" id="terms" defaultChecked="true" className="pl-1" label="I accept Terms and Conditions" />
                                                    </AvGroup>

                                                    <FormGroup className="form-group mb-0 text-center">
                                                        <Button color="primary" className="btn-block">Sign Up</Button>
                                                    </FormGroup>
                                                </AvForm>
                                            </Col>

                                            <Col md={6} className="d-none d-md-inline-block">
                                                <div className="auth-page-sidebar">
                                                    <div className="overlay"></div>
                                                    <div className="auth-user-testimonial">
                                                        <p className="font-size-24 font-weight-bold text-white mb-1">I simply love it!</p>
                                                        {/* <p className="lead">"It's a elegent templete. I love it very much!"</p>
                                                        <p>- Admin User</p> */}
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-1">
                            <Col className="col-12 text-center">
                                <p className="text-muted">Already have an account? <Link to="/account/login" className="text-primary font-weight-bold ml-1">Sign In</Link></p>
                            </Col>
                        </Row>
                    </Container>
                </div>}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { registerUser })(Register);