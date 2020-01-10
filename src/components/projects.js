import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props) {
        super(props);

        this.state = { activeTab : 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Skill Track */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',
                        background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png) center / cover'}}>Skill Tracker</CardTitle>
                        <CardText>
                            A tool developed using Angular 1.6 framework. Tool Monitors the employee skill details for the IT company,
                            Accord Software and Systems Pvt Ltd, Benagaluru. Tool has got attractive web pages,
                            like dashboard which is full of variety of angular charts which makes data analysation a lot simpler,
                            effective.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Network Diagnosis */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',
                        background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png) center / cover'}}>Network Diagnosis</CardTitle>
                        <CardText>
                            A tool developed using Angular 1.6 framework. Tool Monitors the Network Health details for the IT company,
                            L3 Technologies, USA. Tool has got attractive web pages,
                            like dashboard which is full of variety of angular charts which makes data analysation a lot simpler,
                            effective.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Report Anaysis */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',
                        background: 'url(https://s3.amazonaws.com/coursetro/posts/174-full.png) center / cover'}}>Report Analysis</CardTitle>
                        <CardText>
                            A tool developed using Angular 8 framework. Tool Monitors the Baggage Screening, Scanners and Printers details for the IT company,
                            L3 Technologies, USA and is deployed in Airports. Report Scheduling and executing is handled using CRON.Tool has got attractive web pages,
                            like dashboard which is full of variety of angular charts which makes data analysation a lot simpler,
                            effective.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Network Anaysis */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://www.pubnub.com/wp-content/uploads/2019/01/python-socket-programming.png) center / cover'}}>Network Diagnosis</CardTitle>
                        <CardText>
                            A RESTful API tool developed using Python 3.6 with Django framework. Tool Monitors the SNMP, IP Monitoring for IP Conflict detection in the network 
                            details for the IT company, L3 Technologies, USA and is deployed in Airports. 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Testing Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://www.pubnub.com/wp-content/uploads/2019/01/python-socket-programming.png) center / cover'}}>Test Automater</CardTitle>
                        <CardText>
                            A tool developed using Python 3.6. Tool reads the text file and extracts data and simplify it to excel data
                            for the IT company, Accord Benagaluru. This is used to automate test case executions. 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Testing Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://www.pubnub.com/wp-content/uploads/2019/01/python-socket-programming.png) center / cover'}}>Service Checker</CardTitle>
                        <CardText>
                            A tool developed using Python 3.7. Tool reads communication messages exchangin on AC systems. 
                            This tool reads the data from RS485 port and Sends data over Thingsboard through MQTT. 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Kalpavriskha Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://blog.boardinfinity.com/content/images/2019/07/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png) center / cover'}}>Kalpavriksha</CardTitle>
                        <CardText>
                            A RESTful API tool. Recycling of waste material to organic manure!. Tool monitors the waste material bags tracking and users 
                            to be provided with points based on the collected waste material bags. Collected waste material later
                            transformed to organic manure.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Carpooling Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://blog.boardinfinity.com/content/images/2019/07/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png) center / cover'}}>Carpooling</CardTitle>
                        <CardText>
                            A RESTful API tool. Share the ride, save money save nature!.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div>
                    {/* DEM Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-881x441.jpg) center / cover'}}>DEM</CardTitle>
                        <CardText>
                            A RESTful Jersey API tool. Data Extraction Module supports CRON expression for reports execution.
                            A Maven is used to handle project dependencies and generating a build folder.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else{
            return(
                <div>
                    {/* MediCop Tool */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', textColor:'black', 
                        background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>MediCop App</CardTitle>
                        <CardText>
                            A tool to monitor employee health and allows user to see the doctors nearby in their vicinity and 
                            doctors appointment and queries. *** Currently Working ****
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePEn</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    
    render(){
        return(
            <div className="category-tabs ">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}
                ripple>
                    <Tab>Angular JS</Tab>
                    <Tab>Python</Tab>
                    <Tab>Node JS</Tab>
                    <Tab>Java(EE)</Tab>
                    <Tab>React JS</Tab>
                </Tabs>

                {/* <section className="projects-grid"> */}
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
                {/* </section> */}
            </div>
        )
    }
}

export default Projects;