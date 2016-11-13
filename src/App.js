import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { generator } from 'uigradients';
import { defaultTheme } from './Theme';
import logo from './logo.svg';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const P = styled.p`
  color: ${({theme}) => theme.primary };
`;
P.defaultProps = defaultTheme;
const Intro = styled(P)`
  font-style: italic;
  font-size: large;
`;
const Header = styled.div`
  ${({theme}) => generator({gradient: theme.gradient})}
  height: 150px;
  padding: 20px;
  color: ${({theme}) => theme.primary };
`;
Header.defaultProps = defaultTheme;
const Logo = styled.img`
  height: 80px;
`;
const Rotate = styled.div`
    animation: ${rotate360} infinite 20s linear;
`;
const Wrapper = styled.div`
  text-align: center;
`

const LogoRotate = (props) => (
  <Rotate>
    <Logo {...props}/>
  </Rotate>
)
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <LogoRotate src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
        <P>Content...</P>
      </Wrapper>
    );
  }
}


export default App;
