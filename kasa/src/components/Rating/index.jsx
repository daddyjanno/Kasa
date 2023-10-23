import StarPlain from '../../assets/Star-plain.png'
import StarFill from '../../assets/Star-fill.png'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
    display: flex;
    gap: 8px;
`
const StyledStar = styled.img`
    width: 20px;
    height: 20px;
`

function Rating({ nbOfStars }) {
    const ratingArray = [1, 2, 3, 4, 5]

    return (
        <StyledContainer>
            {ratingArray.map((level, index) =>
                nbOfStars >= level ? (
                    <StyledStar
                        src={StarPlain}
                        alt="Rating star filled"
                        key={`${index} - ${level}`}
                    />
                ) : (
                    <StyledStar
                        src={StarFill}
                        alt="Rating star filled"
                        key={`${index} - ${level}`}
                    />
                )
            )}
        </StyledContainer>
    )
}

Rating.propTypes = {
    nbOfStars: PropTypes.string.isRequired,
}

export default Rating
