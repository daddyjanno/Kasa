import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 220px;
    @media screen and (max-width: 600px) {
        height: 110px;
    }
`
const StyledText = styled.p`
    position: absolute;
    color: white;
    font-size: 48px;
    z-index: 1;
    text-align: center;
    filter: drop-shadow(0px 0px 5px #000);
    @media screen and (max-width: 600px) {
        font-size: 24px;
        text-align: start;
    }
`
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: fill;
    overflow: hidden;
    filter: brightness(0.7);
`
const StyledImg = styled.img`
    min-width: 100%;
    object-position: top;
    /* height: 220px; */
`

function Banner({ src, text }) {
    return (
        <BannerContainer>
            <StyledText>{text}</StyledText>
            <ImgContainer>
                <StyledImg src={src} alt="a cliff" />
            </ImgContainer>
        </BannerContainer>
    )
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Banner
