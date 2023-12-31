import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCard = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    max-width: 300px;
    max-height: 300px;
    border-radius: 16px;
    overflow: hidden;
    object-fit: cover;
    aspect-ratio: 1/1;
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: unset;
        max-height: 250px;
        aspect-ratio: auto;
    }
`
const StyledCover = styled.img`
    object-fit: cover;
    object-position: center;
    height: auto;
    filter: brightness(0.9) saturate(90%);
    @media screen and (max-width: 768px) {
        width: 100%;
        object-fit: fill;
        height: auto;
    }
`
const StyledTextContainer = styled.div`
    position: absolute;
    left: 10px;
    bottom: 0px;
    width: 200px;
    padding: 10px 20px;
    overflow: hidden;
    color: black;
    filter: drop-shadow(1px 1px 5px #000);
`
const StyledTitle = styled.p`
    font-size: 18px;
    color: white;
`

function Card({ title, cover }) {
    return (
        <StyledCard>
            <StyledCover src={cover} alt="cover" />
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
            </StyledTextContainer>
        </StyledCard>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card
