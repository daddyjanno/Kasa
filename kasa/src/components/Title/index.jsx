import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Tag from '../Tag'
import PropTypes from 'prop-types'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`
const StyledTitle = styled.h2`
    font-size: 36px;
    font-weight: 400;
    color: ${colors.primary};
    margin: 0px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`
const StyledLocation = styled.h3`
    font-size: 18px;
    font-weight: 200;
    color: ${colors.primary};
    margin: 0px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        font-weight: 400;
    }
`
const StyledTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 8px;
    margin-top: 16px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

function Title({ data }) {
    return (
        <Container>
            <StyledTitle>{data.title}</StyledTitle>
            <StyledLocation>{data.location}</StyledLocation>
            <StyledTagContainer>
                {data.tags.map((tag, index) => (
                    <Tag key={`${index}-${tag}`} tag={tag} />
                ))}
            </StyledTagContainer>
        </Container>
    )
}

Title.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Title
