import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    height: 55vh;
    color: ${colors.primary};
    margin: 50px 0px;
    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 50px auto;
        height: 60vh;
        gap: 0px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: underline;
    color: ${colors.primary};
`
const StyledH1 = styled.h1`
    font-size: 280px;
    font-weight: bold;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 96px;
    }
`
const StyledText = styled.p`
    text-align: center;
`

function Error() {
    return (
        <StyledContainer>
            <StyledH1>404</StyledH1>
            <StyledText>
                Oups! La page que vous demandez n'existe pas.
            </StyledText>
            <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
        </StyledContainer>
    )
}

export default Error
