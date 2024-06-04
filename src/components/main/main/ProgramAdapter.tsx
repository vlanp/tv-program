import TvShow from "../../../interface/TvShow";
import Hour from "./program-adapter/Hour";
import Img from "./program-adapter/Img";
import RigthContent from "./program-adapter/RigthContent";

const ProgramAdapter = ({ tvShows }: { tvShows: Array<TvShow> }) => {
  return (
    <section className="program-adapter">
      {tvShows.map((tvShow) => {
        const { time, title, type, duration, image, isUnseen, direct } = tvShow;
        return (
          <div className="program">
            <Hour time={time} />
            <Img imgPath={image} />
            <RigthContent
              title={title}
              type={type}
              duration={duration}
              isUnseen={isUnseen}
              direct={direct}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProgramAdapter;
