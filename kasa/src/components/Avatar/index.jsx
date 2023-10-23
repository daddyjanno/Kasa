import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 130px;
    gap: 10px;
`
const StyledName = styled.h4`
    font-size: 18px;
    font-weight: 400;
    color: ${colors.primary};
    text-align: end;
    margin: 0px;
`
const StyledAvatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    @media screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`

function Avatar({ host }) {
    return (
        <StyledContainer>
            <StyledName>{host.name}</StyledName>
            <StyledAvatar src={host.picture} alt="The host" />
        </StyledContainer>
    )
}

Avatar.propTypes = {
    host: PropTypes.object.isRequired,
}

export default Avatar
