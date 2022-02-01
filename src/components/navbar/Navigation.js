import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Callapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/panda'>Panda</Nav.Link>
                            <Nav.Link href='/gorilla'>Gorilla</Nav.Link>
                            <Nav.Link href='/rhino'>Rhino</Nav.Link>
                            <Nav.Link href='/seaTurtle'>Sea Turtle</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Callapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;