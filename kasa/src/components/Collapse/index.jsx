import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import chevronDown from '../../assets/chevron-down-solid.png'
import colors from '../../utils/style/colors'

const StyledTextContainer = styled.div`
    background-color: ${colors.backgroundLight};
    color: ${colors.primary};
    z-index: -1;
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;
    padding: 10px 20px 5px 20px;
    transform-origin: top;
    transition: all 0.4s ease-in-out;
    @media screen and (max-width: 600px) {
        padding: 8px 10px 8px 10px;
        font-size: 12px;
    }
`
const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`
const StyledCollapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 50px;
    background-color: ${colors.primary};
    padding: 0px 15px;
    border-radius: 10px;
    cursor: pointer;
`
const StyledTitle = styled.h4`
    color: white;
    font-size: 24px;
    font-weight: 400;
    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`
const StyledChevron = styled.img`
    height: 30px;
    cursor: pointer;
    transform: rotate(180deg);
    ${({ open }) => open && 'transform: rotate(360deg)'};
    transition: all 0.4s ease-in-out both alternate;
    @media screen and (max-width: 600px) {
        height: 20px;
    }
`
const StyledLi = styled.li`
    list-style: none;
`
const StyledUl = styled.ul`
    padding-left: 10px;
`

function Collapse({ title, text }) {
    const [open, setOpen] = useState(false)
    const [heigth, setHeight] = useState('0px')
    const [margin, setMargin] = useState('-15px')

    const contentCollapse = useRef(null)

    const toggleCollapse = () => {
        setOpen(!open)
        setHeight(open ? '0px' : `${contentCollapse.current.scrollHeight}px`)
        setMargin(open ? '-15px' : '-10px')
    }

    return (
        <StyledSection>
            <StyledCollapse onClick={toggleCollapse}>
                <StyledTitle>{title}</StyledTitle>
                <StyledChevron
                    src={chevronDown}
                    open={open}
                    // onClick={toggleCollapse}
                />
            </StyledCollapse>
            {typeof text === 'string' ? (
                <StyledTextContainer
                    open={open}
                    ref={contentCollapse}
                    style={{ maxHeight: `${heigth}`, marginTop: `${margin}` }}
                >
                    <p>{text}</p>
                </StyledTextContainer>
            ) : (
                <StyledTextContainer
                    open={open}
                    ref={contentCollapse}
                    style={{ maxHeight: `${heigth}`, marginTop: `${margin}` }}
                >
                    <StyledUl>
                        {text.map((item, index) => (
                            <StyledLi key={index}>{item}</StyledLi>
                        ))}
                    </StyledUl>
                </StyledTextContainer>
            )}
        </StyledSection>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Collapse
