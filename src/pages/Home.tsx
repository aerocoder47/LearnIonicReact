import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="secondary">
        <IonToolbar>
          <IonTitle>FreeCodeCamp Live</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Hello World 12
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
