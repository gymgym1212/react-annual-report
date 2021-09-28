import React from "react";
import { useSelector } from 'react-redux'

const Page2 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            十年来，你一共与阿里巴巴的开源项目互动了<span>{userState.action_num}</span>次            
        </div>
    )
}
export default Page2;

