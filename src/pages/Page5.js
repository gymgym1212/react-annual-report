import React from "react";
import { useSelector } from 'react-redux'

import ship from '../assets/page5/ship.png'
import { Row, Col, Image, Card } from 'antd';

const Page5 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            <Row>
                <Col span={14} offset={5}>
                    <Image src={ship} preview={false}/>
                </Col>
            </Row>
            <Row>
            <Col span={20} offset={2}>
                <Card style={{'background':'rgba(255,255,255,0.1)','border-radius':'12px'}}>
                    <p style={{'color':'white'}}>你尚未开始在阿里开源项目上的贡献之旅，今天是你与阿里开源的第一次亲密接触。</p>
                    <p style={{'color':'white'}}>登录 <a href="https://opensource.alibaba.com" style={{'color':'#FF6A00'}}>https://opensource.alibaba.com</a> 开启你的开源之旅，了解阿里开源引力计划。</p>
                </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Page5;