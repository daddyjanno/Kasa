import logo from '../../assets/LOGOfooter.png'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    background-color: black;
    color: white;
    height: 200px;
`
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-top: 40px;
    @media screen and (max-width: 600px) {
        width: 30%;
        text-align: center;
        gap: 0px;
    }
`
const StyledLogo = styled.img`
    width: 80px;
    @media screen and (max-width: 600px) {
        width: 120px;
        height: 40px;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <StyledWrapper>
                <StyledLogo src={logo} alt="logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </StyledWrapper>
        </StyledFooter>
    )
}

export default Footer
