import React from "react";
import { useSelector } from 'react-redux'
import { Layout, Row, Col, Image, Button } from 'antd';

import title from '../assets/page2/title.png'
import contributor from '../assets/page2/contributor.png'
import next from '../assets/page2/next-gif.gif'
import star from '../assets/page2/star.png'
import comment from '../assets/page2/comment.png'
import prNum from '../assets/page2/pr.png'
import codeLine from '../assets/page2/codeline.png'

const { Header, Footer, Sider, Content } = Layout;
const Page2 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            {/* 标题 */}
            <Row align='middle'>
                <Col>
                    <Image src={title} width={'59%'} preview={false}/>
                </Col>
            </Row>
            <Row style={{'margin-top':'2.1vh','line-height':'1px'}} align='middle'>
                <Col>
                    <Image src={contributor} width={'47%'} preview={false}/>
                </Col>
            </Row>
            {/* 四个用户数据 */}
            <Row align='middle'>
                <Col style={{'margin-top':'3vh'}}>
                    <Image src={star} width={'89%'} preview={false}/>
                </Col>
            </Row>
            <Row align='middle'>
                <Col style={{'margin-top':'2.1vh'}}>
                    <Image src={comment} width={'89%'} preview={false}/>
                </Col>
            </Row>
            <Row align='middle'>
                <Col style={{'margin-top':'2.1vh'}}>
                    <Image src={prNum} width={'89%'} preview={false}/>
                </Col>
            </Row>
            <Row align='middle'>
                <Col style={{'margin-top':'2.1vh'}}>
                    <Image src={codeLine} width={'89%'} preview={false}/>
                </Col>
            </Row>
            
            
            {/* <div>
                <img src={"https://avatars.githubusercontent.com/u/"+userState.actor_id} alt="头像加载中"/>
            </div> */}
        </div>
        
    )
}
export default Page2;

