import { Col, Row, Image, Card, Avatar } from "antd";
import { QuestionOutlined } from '@ant-design/icons'
import React from "react";
import { useSelector } from 'react-redux'
import '../util/DomToImg.css'
import BG from '../assets/BG.png'
import pic from '../assets/page5/pic.png'
import ship from '../assets/page5/ship.png'
import qrcode from '../assets/qrcode.png'
import { getJpegReady } from "../util/DomToImg";
var sectionStyle = {
    'backgroundImage':`url(${BG})`,
    'background-size':'100% 100%',
    'background-repeat':'no-repeat',
    'background-color':'#3b3b3b'
  }

function isEmpty(obj) {
    for (let i in obj) {
        return true
    }
    return false
}
function convetStringToDate(dateString) {
    if (dateString) {
        var arr1 = dateString.split(" ");
        var sdate = arr1[0].split('-');
        var date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
        return date;
    }
}
var wordStyle = {
    'background-size': '100%'
}

const FirstActionSentence = (props) => {
    const event = props.event.firstEvent;
    const repo = props.event.firstRepo;
    const validEvents = ['Star', 'Fork', 'OpenIssue', 'OpenPullRequest', 'IssueComment', 'PullRequestReview'];
    const eventStr = ['issue', 'PR', '评论', 'review'];
    const index = validEvents.indexOf(event);
    console.log(event, index);
    if (index < 0) return <div></div>;
    else if (index < 2) return (<span style={{
        'color': 'white',
        'background': 'rgba(255,255,255,0.2)',
        'margin': '2px'
    }}>
        这一天，我
        <span style={{ 'color': '#FF6A00' }}>
            {' ' + event.toLowerCase() + ' '}
        </span>
        了
        <span style={{ 'color': '#FF6A00' }}>
            {' ' + repo + ' '}
        </span>
        仓库
    </span>);
    else return (<span style={{
        'color': 'white',
        'background': 'rgba(255,255,255,0.2)',
        'margin': '2px'
    }}>
        这一天，我在
        <span style={{ 'color': '#FF6A00' }}>
            {' ' + repo + ' '}
        </span>
        仓库上提交了第一个
        <span style={{ 'color': '#FF6A00' }}>
            {' ' + eventStr[index - 2] + ' '}
        </span>
    </span>);

}

const StarSentence = (props) => {
    var star = props.star
    if (star > 0) {
        return (
            <span style={{
                'color': 'white',
                'background': 'rgba(255,255,255,0.2)',
                'margin': '2px'
            }}>
                在过去的
                <span style={{ 'color': '#FF6A00' }}>
                    {' ' + 10 + ' '}
                </span>
                年中，我一共{' star '}过
                <span style={{ 'color': '#FF6A00' }}>
                    {' ' + star + ' '}
                </span>
                个阿里开源项目
            </span>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const OpenIssueSentence = (props) => {
    var openIssue = props.openIssue
    if(openIssue>0){
        return (
            <span style={{ 
                'color': 'white',
                'background': 'rgba(255,255,255,0.2)',
                'margin': '2px' }}>
                    提交了
                    <span style={{ 'color': '#FF6A00' }}>
                        {' ' + openIssue + ' '}
                    </span>
                    个 Issue
                </span>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

const IssueCommentSentence = (props) => {
    var issueComment = props.issueComment
    if(issueComment>0){
        return (
            <span style={{ 
                'color': 'white',
                'background': 'rgba(255,255,255,0.2)',
                'margin': '2px' }}>
                    留下了
                    <span style={{ 'color': '#FF6A00' }}>
                        {' ' + issueComment + ' '}
                    </span>
                    个评论
                </span>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

const PRMergedSentence = (props) => {
    var prMerged = props.prMerged
    if(prMerged>0){
        return (
            <span style={{ 
                'color': 'white', 
                'background': 'rgba(255,255,255,0.2)', 
                'margin': '2px' }}>
                合入了
                <span style={{ 'color': '#FF6A00' }}>
                    {' ' + prMerged + ' '}
                </span>
                个{' '}PR
            </span>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const ChangeSentence = (props) => {
    var changes = props.changes
    if(changes>0){
        return (
            <span style={{ 'color': 'white', 'background': 'rgba(255,255,255,0.2)', 'margin': '2px' }}>贡献了<span style={{ 'color': '#FF6A00' }}>{' ' + changes + ' '}</span>行代码</span>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

const DetailPage = () => {
    const dir = { '白银': 'silver', '黄金': 'gold', '白金': 'platinum', '钻石': 'diamond', '大师': 'master', '王者': 'king' }
    const userState = useSelector(state => state.user.value)
    console.log(userState)
    if (isEmpty(userState)) {
        getJpegReady('snapshot')
        
        const date = convetStringToDate(userState.the_first_action_time)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
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

        var level = 'http://oss.x-lab.info/alibaba/h5_assets/level/' + dir[userState.title] + '.png'
        return (
            <div className="section" style={sectionStyle} id='snapshot' >
                <Row style={{ 'position': 'absolute', 'top': '0px', 'margin-bottom':'12px' }}>
                    <Col span={24} style={{'margin-bottom':'-70px'}}>
                        <Image src={pic} preview={false} />
                    </Col>
                    <Col span={24} style={{'margin':'auto'}}>
                    <Avatar size={60} icon={<QuestionOutlined/>}
                    style={{border:'2px solid white'}}
                    src={'https://avatars.githubusercontent.com/u/'+ userState.actor_id}/>
                    </Col>
                    <Col span={24} style={{'margin-top':'4px'}}>
                        <span style={{'color':'white','font-size':'20px','font-weight':'bold'}}>{userState.actor_login}</span>
                    </Col>
            
                    <Col span={20} offset={2} style={{'margin-top':'12px'}}>
                        <Card
                            bodyStyle={{ 'padding': '12px' }}
                            style={{ 'background': 'rgba(255,255,255,0.1)', 'border-radius': '12px' }}>
                            <span style={{ 'color': 'white', 'background': 'rgba(255,255,255,0.2)', 'margin': '2px' }}><span style={{ 'color': '#FF6A00' }}>{year + ' '}年{' ' + month + ' '}月{' ' + day + ' '}日</span>，我和阿里开源第一次亲密接触</span>
                            <FirstActionSentence event={{firstEvent, firstRepo}} />
                            <StarSentence star={star} />
                            <IssueCommentSentence issueComment={issueComment}/>
                            <PRMergedSentence prMerged={prMerged} />
                            <ChangeSentence changes={changes}/>
                        </Card>
                    </Col>
                    <Col span={20} offset={2} style={{ 'margin-top': '10px' }}>
                        <Image src={level} preview={false} />
                    </Col>
                    <Col span={8} offset={8} style={{ 'margin-top': '18px' }}>
                        <Image src={qrcode} style={{borderRadius: 5}} preview={false} />
                    </Col>
                    <Col span={24} style={{ 'margin-top': '9px' }}>
                        <span style={{'color':'white' }}>马上手机扫码打开属于你的阿里开源时光机</span>
                    </Col>
                </Row>
            </div>
        )
    }
    else {
        return (
            <div className="section">
                <Row>
                    <Col span={14} offset={5}>
                        <Image src={ship} preview={false} />
                    </Col>
                    <Col span={20} offset={2}>
                        <Card style={{ 'background': 'rgba(255,255,255,0.1)', 'border-radius': '12px' }}>
                            <p style={{ 'color': 'white' }}>你尚未开始在阿里开源项目上的贡献之旅，今天是你与阿里开源的第一次亲密接触。</p>
                            <p style={{ 'color': 'white' }}>登录 <a href="https://opensource.alibaba.com" style={{ 'color': '#FF6A00' }}>https://opensource.alibaba.com</a> 开启你的开源之旅，了解阿里开源引力计划。</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default DetailPage;
