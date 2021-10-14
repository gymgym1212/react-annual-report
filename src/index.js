import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page6 from './pages/Page6';
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { Layout, Row, Col, Image, Button } from 'antd';

import BG from './assets/BG.png';
import next from './assets/page2/next-gif.gif'
import { isPC } from './util/util';
import InterceptPage from './pages/InterceptPage';
import qrcode from './assets/qrcode.png'
import DetailPage from './pages/DetailPage';

var sectionStyle = {
  'backgroundImage':`url(${BG})`,
  'background-size':'100%',
  'background-repeat':'repeat-x',
  'background-color':'#3b3b3b'
}

var sectionStyle2 = {
  'background-size':'100% 100%'
}

const AnnualReport = () => {
  if(isPC()){
    return (
      <div style={sectionStyle2}>
        <InterceptPage />
      </div>
    )
  }
  // const dir = {'白银':'silver','黄金':'gold','白金':'platinum','钻石':'diamond','大师':'master','王者':'king'}
  // const userState = useSelector(state => state.user.value)
  // if(isEmpty(userState)){
  //     const date = convetStringToDate(userState.the_first_action_time)
  //     const year = date.getFullYear()
  //     const month = date.getMonth()
  //     const day = date.getDay()
  //     var level ='https://xlab-open-source.oss-cn-beijing.aliyuncs.com/alibaba/h5_assets/level/'+dir[userState.title]+'.png'
  // }
  return (
  <div style={sectionStyle}>
    <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    afterRender={() => {
      // Disable Scrolling until input username and click relevant button
      window.fullpage_api.setAllowScrolling(false);
    }}
    afterResize={(width, height)=>{
      window.fullpage_api.reBuild()
    }}
    fitToSection = {false}
    onLeave={(origin, destination, direction)=>{
      if(origin.index==0||origin.index==4){
        document.getElementById('next').classList.add("hinter");
      }
      if(destination.index==0||destination.index==4){
        document.getElementById('next').classList.remove("hinter");
      }
    }}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Row>
            <ReactFullpage.Wrapper>
              <Page1 /> 
              <Page2 />
              <Page3 />
              <Page4 />
              <Page6 />
            </ReactFullpage.Wrapper>
          </Row>
          <DetailPage />
        </div>
      );
    }}
    />
    {/* 提示下一页的动图  */}
    <Row id='next'>
        <Col span={2} offset={11}>
            <Image src={next} preview={false}/>
        </Col>
    </Row>
  </div>)
};

ReactDOM.render(
  <Provider store={store}>
    <AnnualReport/>
  </Provider>,
  document.getElementById("root")
);
