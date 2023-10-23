import styled from 'styled-components'
import Collapse from '../../components/Collapse'
import informations from '../../datas/informations'
import Banner from '../../components/Banner'
import AboutPageBanner from '../../assets/background-about.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 30px;
    margin: 50px auto;
    @media screen and (max-width: 600px) {
        gap: 16px;
        /* min-height: 60vh; */
        margin: 30px auto;
    }
`

const CollapseWrapper = styled.div`
    width: 80%;
    height: auto;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

function About({ src }) {
    return (
        <Container>
            <Banner src={AboutPageBanner} />
            {informations.map((item, index) => (
                <CollapseWrapper key={`${index}-${item}`}>
                    <Collapse
                        key={`${index}-${item}`}
                        title={item.title}
                        text={item.description}
                    />
                </CollapseWrapper>
            ))}
        </Container>
    )
}

export default About
