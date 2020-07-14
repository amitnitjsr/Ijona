import React, { Component } from 'react';
import backimg from '../../Assets/image/Path_1459.png';
import backimg1 from '../../Assets/image/Path 1415.png';
import both from '../../Assets/image/Group 1568.png';
import circle from '../../Assets/image/Group 1119.png'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="back">
                <div className="container">
                    {/* <img src={backimg} atl="test" style={{ width: '100%', paddingBottom: '70px' }} /> */}
                    {/* <img src={backimg1} atl="test" style={{ width: '100%' }} /> */}
                    {/* <div class="bottom-left">Bottom Left</div>
                    <div class="top-left">Top Left</div>
                    <div class="top-right">Top Right</div>
                    <div class="bottom-right">Bottom Right</div>
                    <div class="centered">
                        <div >
                            <h1>Hello</h1>
                        </div>
                    </div> */}
                    <div className="container2">
                        <div className="signin">
                            <div >
                                <img src={circle} atl="both" style={{ width: '5%' }} />
                                <img src={both} atl="both" style={{ width: '50%', float: 'right' }} />
                            </div>
                            <div>
                                <span>Sing In</span>
                            </div>
                            <div>
                                <span><input type='email' placeholder="email" /></span>
                            </div>
                            <div>
                                <span><input type='password' placeholder="password" /></span>
                            </div>
                            <div>
                                <span>Reset Password</span>
                            </div>
                            <div>
                                <button>SUBMIT</button>
                            </div>

                        </div>

                    </div>
                    <div className="container1">

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;