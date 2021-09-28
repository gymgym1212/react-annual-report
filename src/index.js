import React from 'react';
import ReactDOM from 'react-dom';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import store from './app/store'
import { Provider } from 'react-redux'

const AnnualReport = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    afterRender={() => {
      // Disable Scrolling until input username and click relevant button
      window.fullpage_api.setAllowScrolling(false);
    }}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <Provider store={store}>
    <AnnualReport />
  </Provider>,
  document.getElementById("root")
);