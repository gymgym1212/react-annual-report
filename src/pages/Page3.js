import React from "react";
import { useSelector } from 'react-redux'
import { Layout, Row, Col, Image, Button, Card } from 'antd';

import title from '../assets/page3/title.png'
import text from '../assets/page3/text.png'
import rect from '../assets/page3/Rectangle128.png'
import firstRepo from '../assets/page3/firstrepo.png'
import starRepo from '../assets/page3/starrepo.png'
import release from '../assets/page3/release.png'
import logo from '../assets/page3/flow.svg'

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
            <Row style={{'margin-top':'2.1vh','line-height':'1px'}}>
                <Col span={12} offset={6}>
                    <Image src={text} preview={false}/>
                </Col>
                <Col span={12} offset={6}>
                    <Image src={rect} preview={false}/>
                </Col>
            </Row>

            {/* 四个仓库数据 */}
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'3vh'}}>
                    <Image src={firstRepo} preview={false}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'3vh'}}>
                    <Image src={starRepo} preview={false}/>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} style={{'margin-top':'3vh'}}>
                    <div style={{'position':'relative','display':'inline-block'}}>
                        <Image src={release} preview={false} />
                    </div>
                </Col>
            </Row>         
        </div>
    )
}
export default Page3;
