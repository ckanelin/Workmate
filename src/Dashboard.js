import { Container, Header, Content, Footer, Sidebar, Navbar, Nav, Icon, Sidenav, Dropdown } from 'rsuite';
import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import TopBar from "./NavBar.jsx";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };
  
  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  class DashBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true
      };
      this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
      this.setState({
        expand: !this.state.expand
      });
    }
    render() {
      const { expand } = this.state;
      return (
        <div className="show-fake-browser sidebar-page">
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidenav.Header>
                <div style={headerStyles}>
                  <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                  <span style={{ marginLeft: 12 }}> WORKMATE</span>
                </div>
              </Sidenav.Header>
              <Sidenav
                expanded={expand}
                defaultOpenKeys={['3']}
                appearance="subtle"
              >
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                      Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="profile" />}>
                      Profile
                    </Nav.Item>
                    <Nav.Item eventKey="3" icon={<Icon icon="tasks" />}>
                      Tasks
                    </Nav.Item>
                    <Nav.Item eventKey="4" icon={<Icon icon="peoples" />}>
                      Matches
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="inbox" />}>
                      Feedback
                    </Nav.Item>
                    <Dropdown
                      eventKey="4"
                      trigger="hover"
                      title="Settings"
                      icon={<Icon icon="gear-circle" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item eventKey="4-1">Notifications</Dropdown.Item>
                      <Dropdown.Item eventKey="4-2">Other settings</Dropdown.Item>
                    </Dropdown>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
  
            <Container>
              <Header>
                <div>
                    <TopBar/>
                </div>
              </Header>
              <Content>Content</Content>
            </Container>
          </Container>
        </div>
      );
    }
  }
  
  export default DashBoard;