import React from "react";
import { useSelector } from 'react-redux'
import { Row, Col, Image, Card, Button } from 'antd';

import meeting from '../assets/page6/meeting.png'

const Page6 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            <Row>
                <Col span={20} offset={2}>
                    <Image src={meeting} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'100px','line-height':'40px'}}>
                <Col span={20} offset={2}>
                    <Button type="primary" block href='https://yunqi.aliyun.com/2021/agenda/session119'
                    style={{
                    'border': '2px solid #FF6A00',
                    'color':'#FF6A00',
                    'background': 'rgba(0,0,0,0)',
                    'border-radius': '3px',}}
                    >前往峰会官网</Button>
                </Col>
                {/* 使用wechatjsSDK */}
                <Col span={20} offset={2}>
                    <Button type="primary" block 
                    style={{'border': '0px solid #FF6A00',
                    'background': '#FF6A00',
                    'border-radius': '3px',}}
                    >分享我的开源时光机</Button>
                </Col>
            </Row>
        </div>
    )
}
export default Page6;