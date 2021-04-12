import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge,
} from "@ionic/react";
import { cart, list, person, location } from "ionicons/icons";

import Routes from "../../pages";
import { routes } from "../../pages";
import PathLink from "../../utils/pathLinkUrl/PathLink";
import "./_tabs.scss";

interface ContainerProps {}

const Tabs: React.FC<ContainerProps> = () => {
  const renderTab = (
    route: PathLink,
    label: string,
    icon: string,
    badge?: number
  ) => (
    <IonTabButton class="pageTab" tab={route.name} href={route.path}>
      <IonIcon icon={icon} />
      <IonLabel>{label}</IonLabel>
      {badge && <IonBadge className="badge">{badge}</IonBadge>}
    </IonTabButton>
  );

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {renderTab(routes.shops, "Sklepy", location)}
        {renderTab(routes.profile, "Profil", person)}
        {renderTab(routes.orders, "Zamówienia", list, 2)}
        {renderTab(routes.cart, "Koszyk", cart)}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
