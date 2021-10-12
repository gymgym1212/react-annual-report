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

import store from './app/store'
import { Provider } from 'react-redux'
import { Layout, Row, Col, Image, Button } from 'antd';

import BG from './assets/BG.png';
import next from './assets/page2/next-gif.gif'

var sectionStyle = {
  'backgroundImage':`url(${BG})`,
  'background-size':'100%'
}
const AnnualReport = () => {
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
    {/* <div style={{'display':'none'}}>
      <Image src={level}/>
    </div> */}
    <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    afterRender={() => {
      // Disable Scrolling until input username and click relevant button
      window.fullpage_api.setAllowScrolling(false);
    }}
    afterResize={(width, height)=>{
      alert('hello')
      window.fullpage_api.reBuild()
    }}
    fitToSection = {false}
    fixedElements = '.hinter'
    // onLeave={(origin, destination, direction)=>{
    //   if(origin.index==0||destination.index==5){
    //     document.getElementById('next').className += ' hinter';
    //     alert(document.getElementById('next').className);
    //     window.fullpage_api.reBuild();
    //   }
    //   if(origin.index==5||destination.index==0){
    //     document.getElementById('next').className -= ' hinter';
    //     alert(document.getElementById('next').className);
    //     window.fullpage_api.reBuild();
    //   }
    // }}
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
        </div>
      );
    }}
  />
  </div>)
};

ReactDOM.render(
  <Provider store={store}>
    <AnnualReport/>
  </Provider>,
  document.getElementById("root")
);