import React from 'react';
import styled from 'styled-components';

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  font-size: 18px;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const Metrics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Metric = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;

const Chart = styled.div`
  height: 200px;
`;

const Footer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Test = () => {
  return (
    <Dashboard>
      <Header>
        <Logo src="/logo.png" />
        <Nav>
          <NavItem>My Shop</NavItem>
          <NavItem>Settings</NavItem>
          <NavItem>Support</NavItem>
          <NavItem>Log Out</NavItem>
        </Nav>
      </Header>
      <Main>
        <h1>Store Metrics</h1>
        <Metrics>
          <Metric>Earned: $154,000</Metric>
          <Metric>Orders: 300</Metric>
          <Metric>Page Views: 17</Metric>
        </Metrics>
        <Chart />
        <h1>Top Pages</h1>
        <Chart />
        <h1>Users</h1>
        <Chart />
        <h1>Orders and Requests</h1>
        <Chart />
      </Main>
      <Footer>
        <p>Your plans Standard</p>
        <p>Active until 20.07.2020</p>
      </Footer>
    </Dashboard>
  );
};

export default Test;