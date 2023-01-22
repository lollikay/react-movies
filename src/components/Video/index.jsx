import { getYTVideoId } from "../../js/utils/getYTVideoId.js";
import YouTube from "react-youtube";

export const Video = (props) => {
  const { movieId } = props;

  return (
    <YouTube
      videoId={getYTVideoId(movieId)}
      id={movieId}
      className={"relative aspect-[4/3]"}
      iframeClassName={"w-full h-full absolute top-0 left-0 object-contain"}
    />
  )
}