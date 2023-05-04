import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import "./hostVanDetail.css";
import { activeStyle } from "../../../../components/HostLayout/HostLayout";
import { getVanDetail } from "../../../../apis/api";
import useSWR from "swr";

export default function HostVanDetail() {
  const { id } = useParams();
  const {
    data: currentVan,
    error,
    isLoading,
  } = useSWR(`/api/host/vans/${id}`, getVanDetail);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan?.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan?.type}`}>
              {currentVan?.type}
            </i>
            <h3>{currentVan?.name}</h3>
            <h4>${currentVan?.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            end
            to="."
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
