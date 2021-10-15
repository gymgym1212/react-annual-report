import React from "react";
import { useSelector } from 'react-redux'
import { Row, Col, Image, Button,Tooltip } from 'antd';
import { isEmpty } from '../util/util'

import title from '../assets/page6/title.png'
import meeting from '../assets/page6/meeting.png'
import SnapShotPage from "../util/SnapShotPage";

const ShareButton = () => {
    const userState = useSelector(state => state.user.value)
    if(isEmpty(userState)){
        return (
            <Col span={20} offset={2} style={{'margin-top':'1vh'}}>
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
                    <Image src={title} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2vh'}}>
                <Col span={20} offset={2}>
                    <Image src={meeting} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'4.5vh','line-height':'5vh'}}>
                <Col span={20} offset={2}>
                    <Button type="primary" block href='https://developer.aliyun.com/special/open2021'
                    style={{
                    'border': '2px solid #FF6A00',
                    'color':'#FF6A00',
                    'background': 'rgba(0,0,0,0)',
                    'border-radius': '3px',
                    'font-weight':'bold'}}
                    >前往峰会官网</Button>
                </Col>
                {/* 使用wechatjsSDK */}
                <ShareButton/>
            </Row>
            <bodylink />
            <Row style={{'margin-top':'3vh'}}>
                <Col span={24} style={{'textAlign':'center','fontSize':'10px'}}>
                    <span style={{'color':'white'}}>原始数据来源 <a href="https://www.gharchive.org">https://www.gharchive.org/</a></span>
                </Col>
                <Col span={24} style={{'textAlign':'center','fontSize':'10px'}}>
                    <span style={{'color':'white'}}>指标计算方法参考<a href="http://oss.x-lab.info/github-insight-report-2020.pdf">「GitHub 2020 数字洞察报告」</a></span>
                </Col>
                <Col span={24} style={{'textAlign':'center','fontSize':'10px'}}>
                    <span style={{'color':'white'}}>Data Powered by <a href="https://www.x-lab.info">X-lab</a></span>
                </Col>
            </Row>
        </div>
    )
}
export default Page6;
