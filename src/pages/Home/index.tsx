import React from "react";
import { useDispatch } from "react-redux";

import Page from "../../components/Page";
import Button from "../../components/Button";
import { authRequest } from "../../sagas/auth/actions";
import "./_home.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Page>
      <div className="homePage">
        <div className="welcome_buttons">
          <Button
            title="Wybierz sklep"
            onClick={() => dispatch(authRequest())}
          />
          <Button title="Zaloguj się" onClick={() => dispatch(authRequest())} />
          <Button
            title="Zarejestruj się"
            onClick={() => dispatch(authRequest())}
          />
        </div>
      </div>
    </Page>
  );
};

export default Home;
