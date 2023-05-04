import { Link, useLocation, useParams } from "react-router-dom";
import "./vanDetail.css";
import useSWR from "swr";
import { getVanDetail } from "../../../apis/api";

const VanDetail = () => {
  const { id } = useParams();
  const {
    data: vanDetail,
    error,
    isLoading,
  } = useSWR(`/api/vans/${id}`, getVanDetail);
  const { state } = useLocation();

  const search = state?.search || "";
  const type = state?.type || "all";

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {vanDetail ? (
        <div>
          <div className="van-detail">
            <img src={vanDetail?.imageUrl} alt="" />
            <i className={`van-type ${vanDetail?.type} selected`}>
              {vanDetail?.type}
            </i>
            <h2>{vanDetail?.name}</h2>
            <p className="van-price">
              <span>${vanDetail?.price}</span>/day
            </p>
            <p>{vanDetail?.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VanDetail;
