import { Link } from "react-router-dom";
import "./hostVans.css";
import useSWR from "swr";
import { getVans } from "../../../apis/api";

const HostVans = () => {
  const { data: vans, error, isLoading } = useSWR("/api/host/vans", getVans);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const hostVansEls = vans?.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans && vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
