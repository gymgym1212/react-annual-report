import React from 'react';
import FadeInWrapper from '../util/FadeInWrapper';
import './Page1.css'
import { Form, Input, Button, Row, Col } from 'antd';
import { Typography } from 'antd';
import fetch from 'cross-fetch';
import { update } from '../features/user/userSlice';
import { useDispatch } from "react-redux";
import { increment } from '../features/counter/counterSlice';

const { Text } = Typography;

const MyForm = () => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    // ToDo 先暂时禁用按钮的点击事件，防止重复提交
    // ToDo 创建一个加载动画
    fetch("https://xlab-open-source.oss-cn-beijing.aliyuncs.com/alibaba/test/github_users/"+values.username+".json")
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
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{marginLeft:'25vw',width:'50vw'}}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your GitHub ID!',
          },
        ]}
      >
        <Input placeholder="输入你的GitHub ID"/>
      </Form.Item>

      <Form.Item>
        <Button className="myButton" htmlType="submit">
          开启你的阿里开源记忆
        </Button>
      </Form.Item>
    </Form>
  );
};

const DeveloperNumber = FadeInWrapper(() => (
  <Row>
     <Col span={14} offset={5}>
      <Text strong={true} style={{fontSize:'8vmin'}}>1352646</Text>
        {' '}位开发者
      </Col>
  </Row>
),2000,1000)

const StarNumber = FadeInWrapper(() => (
  <Row>
     <Col span={14} offset={5}>
      <Text strong={true} style={{fontSize:'8vmin'}}>15151875</Text>
        {' '}star
      </Col>
  </Row>
), 2000, 2000)

const ForkNumber = FadeInWrapper(() => (
  <Row>
     <Col span={14} offset={5}>
      <Text strong={true} style={{fontSize:'8vmin'}}>1875</Text>
        {' '}fork
      </Col>
  </Row>
), 2000, 3000)

const InputAndButton = FadeInWrapper(MyForm, 5000, 4000)

const Page1 = () => (
    <div className="section">
      <h1>开源十年，感恩有你</h1>
      <DeveloperNumber />
      <StarNumber />
      <ForkNumber />
      <InputAndButton/>
    </div>
);

export default Page1;