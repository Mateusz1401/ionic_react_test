import React from "react";
import { IStore } from "../../../../sagas/stores/types/models";
import "./_tile.scss";

interface TileProps {
  store: IStore;
}

const Tile: React.FC<TileProps> = ({ store }) => (
  <div className="tile">
    <p>{store.merchant_name}</p>
    <p>{store.commission_percentage}</p>
  </div>
);

export default Tile;
