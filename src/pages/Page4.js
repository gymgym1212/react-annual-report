import React from "react";
import { useSelector } from 'react-redux'
import { Layout, Row, Col, Image, Button, Card } from 'antd';

import title from '../assets/page4/title.png'
import tenYearNO1 from '../assets/page4/ten_years_NO_1.png'
import topRepoDonate from '../assets/page4/top_repo_donate.png'
import contributeFlink from '../assets/page4/contribute_flink.png'
import contributeRedis from '../assets/page4/contribute_redis.png'
import oci from '../assets/page4/oci.png'

const Page4 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            {/* 标题 */}
            <Row>
                <Col span={14} offset={5}>
                    <Image src={title} preview={false}/>
                </Col>
            </Row>

            {/* 五个数据 */}
            <Row style={{'margin-top':'2.1vh'}}>
                <Col span={20} offset={2}>
                    <Image src={tenYearNO1} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2.1vh'}}>
                <Col span={20} offset={2}>
                    <Image src={topRepoDonate} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2.1vh'}}>
                <Col span={20} offset={2}>
                    <Image src={contributeFlink} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2.1vh'}}>
                <Col span={20} offset={2}>
                    <Image src={contributeRedis} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2.1vh'}}>
                <Col span={20} offset={2}>
                    <Image src={oci} preview={false}/>
                </Col>
            </Row>
        </div>
    )
}
export default Page4;
