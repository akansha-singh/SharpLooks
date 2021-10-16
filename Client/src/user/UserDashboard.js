import React, { useState } from 'react'
import { Container, Row, Col,ListGroup, ListGroupItem, TabContent} from 'reactstrap';
import UpdateProfile from './UpdateProfile';
import classnames from 'classnames';
import PurchaseHistory from './PurchaseHistory';
import PaymentMethod from './PaymentMethod';
import Profile from './Profile';
import {isAuthenticated} from '../auth/index';
import {LocationOn,Person,ShoppingCart,Payment,Update,ExitToApp} from '@material-ui/icons';
import {signout} from '../auth/index';


const UserDashboard=()=> {
  console.log(isAuthenticated().role===1);
    const {name,about,userId,email,role}=isAuthenticated()

    const [activeTab, setActiveTab] = useState('5');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
      <Container fluid>
      <Row>
          <Col lg={2} xs="12" style={{backgroundColor: '#ffffff',marginTop:'-90px'}}>
            <ListGroup flush style={{textAlign:'left'}}>
              <div style={{height:'220px',paddingTop:'40px',border:'none',outline:'none'}}>
                <center><img src={require('../images/avatar2.png')} alt="Avatar" style={{borderRadius: '50%',width:'100px',padding:'10px'}}/> 
                <p><b>{name}</b></p>
                <i style={{color:'grey'}}>{about}</i></center>
              </div>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px'}} tag="button" action className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}><Person style={{fontSize:'17px',marginRight:'2px'}}/>PROFILE</ListGroupItem>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px'}} tag="button" action className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}><ShoppingCart style={{fontSize:'17px',marginRight:'2px'}}/>PURCHASE HISTORY</ListGroupItem>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px'}} tag="button" action className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}><Payment style={{fontSize:'17px',marginRight:'2px'}}/>PAYMENT METHOD</ListGroupItem>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px'}} tag="button" action className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}><LocationOn style={{fontSize:'17px',marginRight:'2px'}}/>ADDRESS</ListGroupItem>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px'}} tag="button" action className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}><Update style={{fontSize:'17px',marginRight:'2px'}}/>UPDATE PROFILE</ListGroupItem>
              <ListGroupItem style={{border:'none',outline:'none',fontSize:'13px',textAlign:'left'}} tag="button" onClick={signout}><ExitToApp style={{fontSize:'17px',marginRight:'2px'}}/>LOGOUT</ListGroupItem>
            </ListGroup>
        </Col>
        <Col lg={1} xs="1"></Col>
        <Col lg={8} xs="10"><br/><br/>
            <TabContent activeTab={activeTab}>
                <Profile/>
                <PurchaseHistory/>
                <PaymentMethod/>
                <UpdateProfile/>
            </TabContent>
        </Col>
        <Col lg={1} xs="1"></Col>
      </Row>
      </Container>
    )
}

export default UserDashboard
