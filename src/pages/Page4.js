import { Col, Row, Image, Card } from "antd";
import React from "react";
import { useSelector } from 'react-redux'

import pic from '../assets/page4/pic.png'
import ship from '../assets/page5/ship.png'

function isEmpty(obj) {
    for (let i in obj){
        return true
    }
    return false
}
function convetStringToDate(dateString) {  
    if (dateString) {  
        var arr1 = dateString.split(" ");  
        var sdate = arr1[0].split('-');  
        var date = new Date(sdate[0], sdate[1]-1, sdate[2]);  
        return date; 
    }  
}
var wordStyle = {
    'background-size':'100%'
  }
const Page4 = () => {
    const dir = {'白银':'silver','黄金':'gold','白金':'platinum','钻石':'diamond','大师':'master','王者':'king'}
    const userState = useSelector(state => state.user.value)
    if(isEmpty(userState)){
        const date = convetStringToDate(userState.the_first_action_time)
        const year = date.getFullYear()
        const month = date.getMonth()+1
        const day = date.getDate()
        const prMerged = userState.PR_merged
        const prReview = userState.PR_review
        const fork = userState.fork
        const changes = userState.changes
        const issueComment = userState.issue_comment
        const openPR = userState.open_PR
        const star = userState.star
        const openIssue = userState.open_issue
        const firstEvent = userState.the_first_event
        const firstRepo = userState.the_first_repo

        var level ='https://xlab-open-source.oss-cn-beijing.aliyuncs.com/alibaba/h5_assets/level/'+dir[userState.title]+'.png'
        console.log(typeof(level))
        return (
            <div className="section">
                <Row style={{'position':'absolute','top':'0px','zIndex':'10'}}>
                    <Col>
                        <Image src={pic} preview={false}/>
                    </Col>
                    <Col span={20} offset={2}>
                        <Card style={{'background':'rgba(255,255,255,0.1)','border-radius':'12px'}}>
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}><span style={{'color':'#FF6A00'}}>{year}年{month}月{day}日</span>，我和阿里开源第一次亲密接触。</span> 
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}>在过去的<span style={{'color':'#FF6A00'}}>10</span>年中，我一共star过<span style={{'color':'#FF6A00'}}>{star}</span>个阿里开源项目</span>
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}>提出了<span style={{'color':'#FF6A00'}}>{openIssue}</span>个issue</span>
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}>留下了<span style={{'color':'#FF6A00'}}>{issueComment}</span>个评论</span>
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}>合入了<span style={{'color':'#FF6A00'}}>{prMerged}</span>个PR</span>
                           <span style={{'color':'white','background':'rgba(255,255,255,0.2)','margin':'2px'}}>贡献了<span style={{'color':'#FF6A00'}}>{changes}</span>行代码</span>
                        </Card>
                    </Col>
                    <Col span={20} offset={2} style={{'margin-top':'20px'}}>
                        <Image src={level}/>
                    </Col>
                </Row>
            </div>
        )
    }
    else{
        return (
            <div className="section">
                <Row>
                    <Col span={14} offset={5}>
                        <Image src={ship} preview={false}/>
                    </Col>
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
}
export default Page4;