import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "../../components/Page";
import Tile from "./components/Tile";
import { getStoresRequest } from "../../sagas/stores/actions";
import { ApplicationState } from "../../sagas/rootReducers";
import "./_shops.scss";

const Shops: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: ApplicationState) => state.stores
  );

  useEffect(() => {
    dispatch(getStoresRequest());
  }, []);

  return (
    <Page title="Shops" loading={loading}>
      <div className="shopsPage">
        {data.map((store, index) => (
          <Tile key={index} store={store} />
        ))}
      </div>
    </Page>
  );
};

export default Shops;
