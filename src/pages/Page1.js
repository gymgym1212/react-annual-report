import React from 'react';
import './Page1.css'
import { Form, Input, Button, Row, Col, Image } from 'antd';
import fetch from 'cross-fetch';
import { update } from '../features/user/userSlice';
import { useDispatch } from "react-redux";

import tv from '../assets/page1/tv.png'
import text1 from '../assets/page1/text1.png'
import rect1 from '../assets/page1/Rectangle128.png'
import story from '../assets/page1/story.png'
import noGitHubID from '../assets/page1/Group60.png'

import { KeyOutlined } from '@ant-design/icons'

// 防止页面变形！
function inputBlur(){
  setTimeout(()=>{
    window.fullpage_api.reBuild();
    window.fullpage_api.moveTo(0);
  },100)
}
function getViewHeight(){
  console.log(window.innerHeight)
}

function goNext(){
  window.fullpage_api.setAllowScrolling(true);
  window.fullpage_api.moveSectionDown();
}

const MyForm = (props) => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    // ToDo 先暂时禁用按钮的点击事件，防止重复提交
    // ToDo 创建一个加载动画
    var username = values.username.trim().toLowerCase()
    fetch("https://xlab-open-source.oss-cn-beijing.aliyuncs.com/alibaba/github_users/" + username + ".json")
      .then(res => {
        if (res.status >= 400) {// ToDo 处理获取不到数据的情况
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(user => {
        dispatch(update(user)) // 更新Redux的user state
      })
      .catch(err => {
        console.error(err);
      });
      window.fullpage_api.setAllowScrolling(true);
      window.fullpage_api.moveSectionDown();


    // ToDo 如果获取数据正常，取消加载动画，恢复按钮点击事件，跳转到下一页。
  };

  const onFinishFailed = (errorInfo) => { // ToDo 考虑一下有没有用
    console.log('Failed:', errorInfo);
  };

  return (
    <Form name="basic" onFinish={onFinish} 
          onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入你的GitHub ID!',
          },
        ]}
        style={{'margin-bottom':'6px'}}
      >
        <Input placeholder="输入你的GitHub ID，开启你的开源时光机" 
        style={{
          'color':'white',
          'background': 'rgba(242, 242, 242, 0.1)',
          'border': '1px solid #FFFFFF',
          'box-sizing': 'border-box',
          'border-radius': '3px'}}
          onBlur={inputBlur}
          />
      </Form.Item>
      <Form.Item id='item' style={{'margin-bottom':'5px'}}>
          <Button id='btn' type="primary" icon={<KeyOutlined/>} block htmlType="submit" style={{
            'border': '0px solid #FF6A00',
            'background': '#FF6A00',
            'border-radius': '3px',
          }}>
          </Button>
      </Form.Item>
    </Form>
  );
};

const Page1 = () => (
  <div className="section">
    <Row>
      <Col span={18} offset={3}>
        <Image src={tv} preview={false}/>
      </Col>
    </Row>
    <Row style={{'margin-top':'10px','line-height':'5px'}}>
      <Col span={8} offset={8}>
        <Image src={text1} preview={false}/>
      </Col>
      <Col span={8} offset={8}>
        <Image src={rect1} preview={false}/>
      </Col>
    </Row>
    <Row style={{'margin-top':'20px'}}>
      <Col span={18} offset={3}>
        <Image src={story} preview={false}/>
      </Col>
    </Row>
    <Row style={{'margin-top':'20px','line-height':'1px'}}>
      <Col span={18} offset={3}>
        <MyForm/>
      </Col>
      <Col span={14} offset={5}>
        <Image src={noGitHubID} preview={false} onClick={goNext}/>
      </Col>
    </Row>
    {/* <Row>
      <Col span={14} offset={5}>
        <Image src={noGitHubID} preview={false} onClick={goNext}/>
      </Col>
    </Row> */}
  </div>
);

export default Page1;