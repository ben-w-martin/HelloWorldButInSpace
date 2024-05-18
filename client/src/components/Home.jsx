import { useEffect, useState } from "react";
import { HomeFilters } from "./HomeFilters";
import { HomeView } from "./HomeView";
import { HomeMap } from "./HomeMap";

function Home() {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onGetLocationSuccess,
      onGetLocationError
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //#region GET LOCATION HANDLERS
  const onGetLocationSuccess = (response) => {
    const coords = {
      lat: response.coords.latitude,
      lng: response.coords.longitude,
    };

    console.log(coords);

    setCenter(coords);
  };

  const onGetLocationError = (error) => {
    console.log("onGetLocationError", error);
  };
  //#endregion

  return (
    <>
      <main className="home-main">
        <div className="home-container">
          <HomeFilters></HomeFilters>
          <HomeView></HomeView>
          <HomeMap center={center}></HomeMap>
        </div>
      </main>
    </>
  );
}

export { Home };