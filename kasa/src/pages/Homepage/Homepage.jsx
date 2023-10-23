import { Link } from 'react-router-dom'
import rentalsList from '../../datas/logements.json'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Banner from '../../components/Banner'
import HomePageBanner from '../../assets/background-home.png'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    width: 90%;
`
const CardWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-row-gap: 50px;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    margin: 25px auto;
    background-color: ${colors.backgroundLight};
    padding: 25px;
    border-radius: 16px;
    justify-items: center;
    @media screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: transparent;
        width: 100%;
        margin: 0px;
        padding: 30px 0px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

function Homepage() {
    return (
        <HomeContainer>
            <Banner
                src={HomePageBanner}
                text="Chez vous, partout et ailleurs"
            />
            <CardWrapper>
                {rentalsList.map((item) => (
                    <StyledLink key={item.id} to={`/rentals/${item.id}`}>
                        <Card
                            key={item.id}
                            title={item.title}
                            cover={item.cover}
                        ></Card>
                    </StyledLink>
                ))}
            </CardWrapper>
        </HomeContainer>
    )
}

export default Homepage
