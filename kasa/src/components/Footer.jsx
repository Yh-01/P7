import FooterLogo from './FooterLogo'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 209px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

const FooterText = styled.div`
  color: white;
  font-family: Montserrat;
  font-style: Medium;
  line-height: 17px;
  line-height: 143%;
  text-align: center;
  vertical-align: bottom;
`

function Footer() {
  return (
    <FooterStyle>
      <FooterLogo />
      <FooterText>
        <p>© 2020 Kasa. All rights reserved</p>
      </FooterText>
    </FooterStyle>
  )
}

export default Footer
