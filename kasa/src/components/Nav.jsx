import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navstyle = styled.div`
  width: 140px;
  height: 17px;
  top: 18px;
  margin-left: 150px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;

  @media (min-width: 768px) {
    width: 309px;
    height: 34px;
    top: 17px;
    left: 931px;
  }
`

const StyledLink = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;

  display: flex;
  align-items: flex-end;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;

  color: #ff6060;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 17px;

    text-transform: none;
  }
`
const StyledLinkAbout = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: flex-end;
  text-align: right;

  color: #ff6060;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 17px;
    text-transform: none;
  }
`
function Nav() {
  return (
    <Navstyle>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLinkAbout to="/about">A Propos</StyledLinkAbout>
    </Navstyle>
  )
}
export default Nav
