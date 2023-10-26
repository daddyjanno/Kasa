import styled from 'styled-components'
import ArrowLeft from '../../assets/Arrow-left.png'
import ArrowRight from '../../assets/Arrow-right.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

const StyledCarousel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 16px;
    margin: 20px auto;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 0px 0px 7px #666;
    @media screen and (max-width: 768px) {
        height: 255px;
        width: 100%;
    }
`
const StyledSlide = styled.img`
    border-radius: 16px;
    min-width: 100%;
    min-height: 400px;
    @media screen and (max-width: 768px) {
        min-height: 255px;
        aspect-ratio: inherit;
    }
`
const LeftArrow = styled.img`
    position: absolute;
    left: 10px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 2px #000);
`
const RightArrow = styled.img`
    position: absolute;
    right: 10px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 5px #000);
`
const Indicator = styled.span`
    display: flex;
    position: absolute;
    bottom: 10px;
    color: white;
    border: none;
    outline: none;
    filter: drop-shadow(0px 0px 5px #000);
`

function Slideshow({ pictures }) {
    let [index, setIndex] = useState(0)

    const isFirstSlide = index === 0
    const isLastSlide = index === pictures.length - 1

    const handleLeftArrow = () => {
        if (!isFirstSlide) {
            setIndex(--index)
        } else {
            setIndex(pictures.length - 1)
        }
    }
    const handleRightArrow = () => {
        if (!isLastSlide) {
            setIndex(++index)
        } else {
            setIndex(0)
        }
    }

    return pictures.length > 1 ? (
        <StyledCarousel>
            <LeftArrow
                src={ArrowLeft}
                alt="Arrow left"
                onClick={handleLeftArrow}
            />
            <StyledSlide src={`${pictures[index]}`} alt="slideshow" />
            <Indicator>
                {index + 1}/{pictures.length}
            </Indicator>
            <RightArrow
                src={ArrowRight}
                alt="Arrow right"
                onClick={handleRightArrow}
            />
        </StyledCarousel>
    ) : (
        <StyledCarousel>
            <StyledSlide src={`${pictures[index]}`} alt="slideshow" />
        </StyledCarousel>
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.array.isRequired,
}

export default Slideshow
