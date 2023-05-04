import { useOutletContext } from "react-router-dom";
import { VanType } from "../../../../Vans/Vans";
type ContextType = { currentVan: VanType | null };
const HostVanPhotos = () => {
  const { currentVan } = useOutletContext<ContextType>();
  return  <img src={currentVan?.imageUrl} className="host-van-detail-image" />;
};

export default HostVanPhotos;
