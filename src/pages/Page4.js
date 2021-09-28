import React from "react";
import { useSelector } from 'react-redux'

const Page4 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            <p>十年里，你对阿里巴巴的开源项目给出了：</p>
            <p><span>{userState.star}</span>个star，</p>
            <p><span>{userState.fork}</span>个fork的赞许。</p>
            <p>并且，你还作了<span>{userState.issue_comment}</span>次issue的评论</p>  
        </div>
    )
}
export default Page4;