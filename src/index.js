import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { Layout, Row, Col, Image, Button } from 'antd';

import BG from './assets/BG.png';
import next from './assets/page2/next-gif.gif'
import { isPC, isWeChat } from './util/util';
import InterceptPage from './pages/InterceptPage';
import qrcode from './assets/qrcode.png'
import DetailPage from './pages/DetailPage';
import { isAndroid } from './util/util';

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
      document.querySelector('body').setAttribute('style', 'height:'+clientHeight+'px;');
      window.fullpage_api.setAllowScrolling(false);
      console.log('scrollTop: '+document.documentElement.scrollTop)
      if(isAndroid()){
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        window.addEventListener('resize',()=> {
          console.log('Listener...')
          console.log('scrollTop: '+document.documentElement.scrollTop)
          console.log('clientHeight: '+ document.documentElement.clientHeight || document.body.clientHeight)
          var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
          console.log("进入到判断页面高度=========");
          console.log("页面初始高度========="+clientHeight);
          console.log("软键盘弹起高度========="+nowClientHeight);
          if(nowClientHeight-0<clientHeight-0){
            console.log("进入到软键盘弹起=========");
            if(isWeChat()){
              document.querySelector('body').setAttribute('style', 'height:'+clientHeight+'px;');
              document.documentElement.scrollTop=(clientHeight - nowClientHeight)/2;
              setTimeout(window.fullpage_api.reBuild(),200)
            }
            else{
              document.querySelector('body').setAttribute('style', 'height:'+clientHeight+'px;');
              document.documentElement.scrollTop=(clientHeight - nowClientHeight)/2;
            }
            
            // var sections = document.getElementsByClassName('fp-section');
            // for(var i=0;i<sections.length;i++ ){
            //   sections[i].style.top='-28%'
            // }
          }
          else{
            console.log("进入到软键盘收起=========");
           
            // document.documentElement.scrollTop=0
            // alert(document.documentElement.scrollTop)
            // document.querySelector('body').setAttribute('style', 'height:'+clientHeight+'px;');
            document.getElementById('id_input').blur();
          }
        })
      }
    }}
    afterResize={(width, height)=>{
      document.getElementById('empty').style.display = 'inline-block'
      console.log(document.documentElement.scrollTop)
      console.log(width,height)
      window.fullpage_api.reBuild()
    }}
    fitToSection = {true}
    onLeave={(origin, destination, direction)=>{
      if(origin.index==0||origin.index==5){
        document.getElementById('next').classList.add("hinter");
      }
      if(destination.index==0||destination.index==5){
        document.getElementById('next').classList.remove("hinter");
      }
      // alert(document.getElementById('snapshot').offsetWidth)
      // alert(document.getElementById('snapshot').offsetHeight)
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
              <Page5 />
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
