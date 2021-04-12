import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import "./_header.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader id="header">
    <IonToolbar>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
