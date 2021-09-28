import React from "react";
import { useSelector } from 'react-redux'

const Page5 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            <p>十个春夏秋冬过去，代码始终是你不变的执着</p>
            <p>曾打开的<span>{userState.open_issue}</span>个issue，是你对问题的不断苛求</p>
            <p>提出的<span>{userState.open_PR}</span>个Pull Request,是你流过的汗水</p>
            <p>被合并的<span>{userState.PR_merged}</span>个Pull Request，是你努力的果实</p>  
        </div>
    )
}
export default Page5;