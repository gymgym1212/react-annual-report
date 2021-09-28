import React from "react";
import { useSelector } from 'react-redux'

const Page3 = () => {
    const userState = useSelector(state => state.user.value)
    return (
        <div className="section">
            还记得在<span>{userState.the_first_action_time}</span>，我们第一次相遇           
        </div>
    )
}
export default Page3;