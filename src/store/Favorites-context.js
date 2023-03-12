import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});
function FavoritesContextProvider(props) {
  const [userFavoirets, setUserFavoirets] = useState([]);
  const context = {
    favorites: userFavoirets,
    totalFavorites: setUserFavoirets.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
