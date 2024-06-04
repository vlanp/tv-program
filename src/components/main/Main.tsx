import TvShow from "../../interface/TvShow";
import ProgramAdapter from "./main/ProgramAdapter";

const Main = ({ tvShows }: { tvShows: Array<TvShow> }) => {
  return (
    <main className="container">
      <ProgramAdapter tvShows={tvShows} />
    </main>
  );
};

export default Main;
