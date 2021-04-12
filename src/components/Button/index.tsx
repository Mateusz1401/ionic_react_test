import React from "react";
import { IonButton } from "@ionic/react";

import "./_button.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
  <IonButton className="action_btn" onClick={onClick}>
    {title}
  </IonButton>
);

export default Button;
