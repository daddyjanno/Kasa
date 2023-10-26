import styled from 'styled-components'
import colors from '../../utils/style/colors'
import PropTypes from 'prop-types'

const SyledTag = styled.div`
    color: ${colors.secondary};
    background-color: ${colors.primary};
    font-size: 14px;
    font-weight: 400;
    border-radius: 16px;
    padding: 8px 40px;
    @media screen and (max-width: 768px) {
        font-size: 10px;
        padding: 8px 10px;
        /* border-radius: 8px; */
    }
`

function Tag({ tag }) {
    return <SyledTag>{tag}</SyledTag>
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default Tag
