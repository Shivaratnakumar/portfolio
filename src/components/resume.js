import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from '../Kumar.png';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid className="">
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src={logo}
                            alt="avatar" style={{height:'320px'}}
                             />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Shivaratnakumar Patil</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <h5>Address</h5>
                        <p>Chikkodi, PIN:591229</p>
                        <h5>Web</h5>
                        <p>MyWebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 >Education</h2>

                        <Education
                         startYear={2013}
                         endYear={2017}
                         schoolName="KLS GIT"
                         schoolDescription="Belagavi, VTU affiliated"
                         />

                        <Education
                         startYear={2011}
                         endYear={2013}
                         schoolName="GPUC, Majalatti"
                         schoolDescription="Govt P U College Majaltti,Chikkodi"
                         />

                         <hr style={{borderTop:'3px solid #e22947'}} />

                         <h2 >Experience</h2>
                         <Experience 
                         startYear={2017}
                         endYear={2018}
                         jobName="Software Developer"
                         jobDescription="Full Stack Web Development"
                         />

                        <Experience 
                         startYear={2018}
                         endYear={2019}
                         jobName="Software Developer"
                         jobDescription="Embedded development"
                         />
                         <hr style={{borderTop:'3px solid #e22947'}} />
                         <h2 >Skills</h2>

                         <Skills 
                         skill="Angular JS 1.6"
                         progress={80}
                         />

                        <Skills 
                         skill="HTML/CSS"
                         progress={80}
                         />

                        <Skills 
                         skill="Python"
                         progress={50}
                         />

                        <Skills 
                         skill="Java"
                         progress={50}
                         />

                        <Skills 
                         skill="React"
                         progress={40}
                         />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;