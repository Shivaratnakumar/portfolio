import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (



<div >
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to="/">SRK</Link>}>
            <Navigation>            
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}} to="/">MyPortfolio</Link>}>
        <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
