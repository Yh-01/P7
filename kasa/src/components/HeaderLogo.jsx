import logo from '../assets/LOGO.png'
import styled from 'styled-components'

const LogoStyle = styled.img`
  position: absolute;
  left: 0%;
  right: 56.72%;
  top: 0%;
  bottom: 0%;
  width: 145px;
  height: 47px;

  @media (min-width: 768px) {
    width: 210px;
    height: 68px;
  }
`
function Logo() {
  return <LogoStyle src={logo} alt="" />
}

export default Logo
