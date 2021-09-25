import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button, Input } from 'antd';
import './App.css'
class App extends React.Component {
    
    render() {
        return (
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Button id='btn' onClick={() => fullpageApi.setAllowScrolling(false)}>Hello</Button>
                            <div className="section">
                                {/* 欢迎页 */}
                                <h1>开源十年，感恩有你</h1>
                                <Input placeholder="输入你的GitHub登录用户名" id="github_username" />
                                <Button style={{ backgroundColor: '#ff6a02', color: '#ffffff' }} onClick={() => fullpageApi.setAllowScrolling(true)}>开启你的开源回忆</Button>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                            <div className="section">
                                <p>Section 3</p>
                            </div>
                            <div className="section">
                                <p>Section 4</p>
                            </div>
                            <div className="section">
                                <p>Section 5</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}

export default App;
