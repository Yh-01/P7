import footerLogo from '../assets/footerlogo.png'
import styled from 'styled-components'

const FooterLogoStyle = styled.img`
  width: 122px;
`

function FooterLogo() {
  return <FooterLogoStyle src={footerLogo} alt="" />
}

export default FooterLogo
