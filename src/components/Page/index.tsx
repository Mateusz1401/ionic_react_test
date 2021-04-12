import React from "react";
import { IonPage, IonContent, IonLoading } from "@ionic/react";

import Header from "../Header";
import "./_page.scss";

interface PageProps {
  children: React.ReactNode;
  title?: string;
  loading?: boolean;
}

const Page: React.FC<PageProps> = ({ children, title, loading }) => (
  <IonPage>
    {title && <Header title={title} />}
    <IonContent fullscreen className="page">
      {!loading ? (
        <div className="page_container">{children}</div>
      ) : (
        <IonLoading isOpen message="Proszę czekać" />
      )}
    </IonContent>
  </IonPage>
);

export default Page;
