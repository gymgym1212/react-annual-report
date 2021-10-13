import React from 'react';
import './Page1.css'
import { Row, Col, Image } from 'antd';
import { Typography } from 'antd';
import tv from '../assets/page1/tv.png'

const { Title } = Typography;

const InterceptPage = () => {
    return (
        <div>
            <Row style={{'margin-top':'100px'}}>
                <Col span={6} offset={9}>
                    <Image src={tv} preview={false}/>
                </Col>
            </Row>
            <Row>
                <Col style={{'margin':'auto'}}>
                    <Title style={{'color':'white'}}>请使用手机开启时光机！</Title>
                </Col>
            </Row>
        </div>
    )
}

export default InterceptPage;