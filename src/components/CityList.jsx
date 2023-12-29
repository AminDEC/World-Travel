/* eslint-disable no-unused-vars */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

function cityList({ cities, loading }) {
  if (loading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default cityList;
