import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

import logo from '../Kumar.png';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={logo} alt="avatar" className="avatar-img">
                        </img>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Angular JS | React JS | Node JS | Python | Postgre SQL | MongoDB | Java(EE) </p>
                            <div className="social-links">
                                { /* LinkedIn */ }
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" 
                                 area-hidden="true"></i></a>

                                { /* GitHub */ }
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" 
                                 area-hidden="true"></i></a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;