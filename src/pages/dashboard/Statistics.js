// @flow
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import { fetchJSON } from '../../helpers/api';
import { BASE_URL } from '../../constants/endpoints';

const Statistics = () => {

    const [ordersCount, setOrdersCount] = useState({
        inProgress: 0,
        pending: 0,
        issues: 0,
        totalCustomers: 0,
    }) 

    useEffect(()=>{
        getOrdersCount();
    },[])

    

    const getOrdersCount = async()=>{
        const res = await fetchJSON(BASE_URL+'/order/merchant/count/today');

        if(res.success) {
            setOrdersCount(res.orderCounts)
        }
    }

    
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Orders in progress"
                        title={ordersCount.inProgress}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        imgtype='uil uil-truck'
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '10.21%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Pending"
                        title={ordersCount.pending}
                        colors={['#f77e53']}
                        imgtype='uil  uil-clock'
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Additional info"
                        title={ordersCount.issues}
                        imgtype='uil uil-sync-exclamation'
                        colors={['#43d39e']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '25.16%'
                        }}></StatisticsChartWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsChartWidget
                        description="Total Customers"
                        title={ordersCount.totalCustomers}
                        imgtype='uil uil-users-alt'
                        colors={['#ffbe0b']}
                        data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%'
                        }}></StatisticsChartWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
