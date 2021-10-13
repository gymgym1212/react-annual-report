import React from "react";
import { useSelector } from 'react-redux'
import { Row, Col, Image, Card, Button } from 'antd';
import { isEmpty } from '../util/util'

import meeting from '../assets/page6/meeting.png'
import SnapShotPage from "../util/SnapShotPage";

const ShareButton = () => {
    const userState = useSelector(state => state.user.value)
    if(isEmpty(userState)){
        return (
            <Col span={20} offset={2}>
                <SnapShotPage/>
            </Col>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}
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
                <ShareButton/>
            </Row>
        </div>
    )
}
export default Page6;