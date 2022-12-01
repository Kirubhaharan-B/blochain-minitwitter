/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#E1E8ED" variant="dark" style={{backgroundColor:'#AAB8C2',display:'flex'}}>
      <Container style={{justifyContent:'space-around',padding:20,textAlign:'center',alignItems:'center',display:'flex',width:'100%'}}>
        <Navbar.Brand href="#home" style={{margin:0,color:'#657786'}} >Home</Navbar.Brand>
        <Navbar.Brand href="#home" style={{margin:0,color:'#657786'}} >Recommend</Navbar.Brand>
        <Navbar.Brand href="#home" style={{margin:0,color:'#657786'}}>Meet the Team</Navbar.Brand>
        <Navbar.Brand href="#home" style={{margin:0,color:'#657786'}}>Connect Wallet</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;