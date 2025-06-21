import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from 'styled-components';

const Home: React.FC = () => {
    return (
        <IonPage>

            <IonContent fullscreen>

                <Host>

                    <StyledLogoWrapper>
                        <StyledLogo src='public/logo.png' />
                    </StyledLogoWrapper>

                </Host>

            </IonContent>
        </IonPage>
    );
};

const Host = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLogo = styled(IonImg)`
    width: 50%;
`;



export default Home;
