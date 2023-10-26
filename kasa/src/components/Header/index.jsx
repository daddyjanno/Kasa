import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/LOGOmain.png'
import colors from '../../utils/style/colors'

const StyledLogo = styled.img`
    height: 70px;
    width: 210px;
    @media screen and (max-width: 768px) {
        height: 45px;
        width: 145px;
    }
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 35px;
    width: 300px;
    gap: 60px;
    @media screen and (max-width: 768px) {
        gap: 10px;
    }
`
const StyledLink = styled(NavLink)`
    color: ${colors.primary};
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
    }
    &.active {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
    }
`
const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    padding: 30px 0;
    width: 90%;
`

function Header() {
    return (
        <StyledHeader>
            <Link to={'/'}>
                <StyledLogo src={logo} alt="logo Kasa" />
            </Link>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header
