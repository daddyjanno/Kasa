import { Navigate, useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import rentalsList from '../../datas/logements'
import styled from 'styled-components'
import Title from '../../components/Title'
import Rating from '../../components/Rating'
import Avatar from '../../components/Avatar'
import Collapse from '../../components/Collapse'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 20px auto;
`
const InformationContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding: 16px 0px;
    gap: 30px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px;
`
const AvatarRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 40px;
    @media screen and (max-width: 600px) {
        width: 100%;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        margin: 10px auto;
        gap: 0px;
    }
`
const CollapsesContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    margin-bottom: 20px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const CollapseWrapper = styled.div`
    width: 45%;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

function Rentals() {
    const rentalIdObject = useParams()
    const rentalId = rentalIdObject.id
    const data = rentalsList.find((element) => element.id === rentalId)

    return data ? (
        <Container>
            <Slideshow pictures={data.pictures} />
            <InformationContainer>
                <Title data={data} />
                <AvatarRatingContainer>
                    <AvatarContainer>
                        <Avatar host={data.host} />
                    </AvatarContainer>
                    <Rating nbOfStars={data.rating} />
                </AvatarRatingContainer>
            </InformationContainer>
            <CollapsesContainer>
                <CollapseWrapper>
                    <Collapse title={'Description'} text={data.description} />
                </CollapseWrapper>
                <CollapseWrapper>
                    <Collapse title={'Equipements'} text={data.equipments} />
                </CollapseWrapper>
            </CollapsesContainer>
        </Container>
    ) : (
        <Navigate to="/error" />
    )
}

export default Rentals
