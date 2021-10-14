import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { getJpeg, getPNG, getSVG } from "../util/DomToImg";

function createSnapShot(){
    getJpeg('snapshot')
}

const SnapShotPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    window.fullpage_api.setAllowScrolling(false);
    setIsModalVisible(true);
    createSnapShot();
    handleCancel()
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button 
        type="primary" 
        block
        onClick={
          showModal
        }
        id='open_snapshot_btn'
        style={{'border': '0px solid #FF6A00',
        'background': '#FF6A00',
        'border-radius': '3px',
        }}
        >分享我的开源时光机</Button>
      <Modal 
        visible={isModalVisible} 
        onOk={handleOk} 
        style={{top:20}}
        afterClose={()=>{
            window.fullpage_api.setAllowScrolling(true);
        }}
        destroyOnClose={true}
        forceRender={true}
        onCancel={handleCancel}
        footer={null}
        title={null}
        >
            <Row>
                <Col span={20} offset={2}>
                    <div id="export-img">

                        </div>
                </Col>
            </Row>
            <Row>
                <Col style={{'margin':'auto'}}>
                    <span style={{'color':'black'}}>点击图片下载，微信请长按保存</span>
                </Col>
            </Row>
      </Modal>
    </>
  );
};
export default SnapShotPage;
