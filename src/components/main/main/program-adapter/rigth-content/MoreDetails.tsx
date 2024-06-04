import Duration from "./more-details/Duration";
import Unseen from "./more-details/Unseen";
import Direct from "./more-details/Direct";

const MoreDetails = ({
  duration,
  isUnseen,
  direct,
}: {
  duration: string;
  isUnseen: boolean;
  direct: boolean;
}) => {
  return (
    <div className="more-details">
      <Duration duration={duration} />
      <Unseen isUnseen={isUnseen} />
      <Direct direct={direct} />
    </div>
  );
};

export default MoreDetails;
