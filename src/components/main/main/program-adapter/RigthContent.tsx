import Title from "./rigth-content/Title";
import Type from "./rigth-content/Type";
import MoreDetails from "./rigth-content/MoreDetails";

const RigthContent = ({
  title,
  type,
  duration,
  isUnseen,
  direct,
}: {
  title: string;
  type: string;
  duration: string;
  isUnseen: boolean;
  direct: boolean;
}) => {
  return (
    <div className="rigth-content">
      <Title title={title} />
      <Type type={type} />
      <MoreDetails duration={duration} isUnseen={isUnseen} direct={direct} />
    </div>
  );
};

export default RigthContent;
