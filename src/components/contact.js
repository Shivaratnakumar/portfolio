import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import logo from '../Kumar.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Shivaratnakumar Patil</h2>
                        <img src={logo}
                        alt="avatar" style={{height: '250px'}} />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                            Software Engineer, AGTSPL, Bengaluru
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>(+91) 8050372422
                                    
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>(+91) 8050372422
                                    
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>shivaratnakumar@gmail.com
                                    
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>shivaratnakumar.p@accord-soft.com
                                    
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;