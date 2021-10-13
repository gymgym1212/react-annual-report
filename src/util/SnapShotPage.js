import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { getJpeg, getPNG, getSVG } from "../util/DomToImg";

function createSnapShot(){
    getSVG('snapshot')
}

const SnapShotPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
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
        onClick={showModal}
        style={{'border': '0px solid #FF6A00',
        'background': '#FF6A00',
        'border-radius': '3px',
        }}
        >分享我的开源时光机</Button>
      <Modal 
        title="Basic Modal"
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default SnapShotPage;