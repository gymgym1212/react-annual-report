import React from "react";
import { useSelector } from 'react-redux'
import { Layout, Row, Col, Image, Button, Card } from 'antd';

import title from '../assets/page3/title.png'
import firstRepo from '../assets/page3/firstrepo.png'
import starRepo from '../assets/page3/starrepo.png'
import release from '../assets/page3/release2.png'
import logo from '../assets/page3/flow.svg'
import graduate from '../assets/page3/graduate.png'

const Page3 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            {/* 标题 */}
            <Row>
                <Col span={14} offset={5}>
                    <Image src={title} preview={false}/>
                </Col>
            </Row>

            {/* 四个仓库数据 */}
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'20px'}}>
                    <Image src={firstRepo} preview={false}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'10px'}}>
                    <Image src={starRepo} preview={false}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'10px'}}>
                    <div style={{'position':'relative','display':'inline-block'}}>
                        <Image src={release} preview={false} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'10px'}}>
                    <Image src={graduate} preview={false}/>
                </Col>
            </Row>          
        </div>
    )
}
export default Page3;