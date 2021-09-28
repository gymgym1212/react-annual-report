import React from "react";
import QueueAnim from 'rc-queue-anim';

const FadeInComponent = (WrappedComponent, time, delay) => {
    class NewComponent extends React.Component {
        render() {
            return (
                <div className="queue-demo">
                    <QueueAnim
                        delay={delay}
                        duration={time}
                        type='alpha'>
                        <div key="a">
                            <WrappedComponent />
                        </div>
                    </QueueAnim>
                </div>
            )
        }
    }
    return NewComponent;
}

export default FadeInComponent
