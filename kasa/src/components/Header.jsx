import Logo from './HeaderLogo'
import Nav from './Nav'
import styled from 'styled-components'

const Banner = styled.header`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 86%;
  height: 47px;
  top: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 86%;
    height: 68px;
  }
`

function Header() {
  return (
    <Banner>
      <Logo />
      <Nav />
    </Banner>
  )
}

export default Header
