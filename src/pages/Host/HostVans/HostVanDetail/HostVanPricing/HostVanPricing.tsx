import { useOutletContext } from "react-router-dom";
import { VanType } from "../../../../Vans/Vans";
type ContextType = { currentVan: VanType | null };
const HostVanPricing = () => {
  const { currentVan } = useOutletContext<ContextType>();
  return (
    <h3 className="host-van-price">
      ${currentVan?.price}
      <span>/day</span>
    </h3>
  );
};

export default HostVanPricing;
