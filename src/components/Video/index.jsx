import { getYTVideoId } from "../../js/utils/getYTVideoId.js";
import YouTube from "react-youtube";

export const Video = (props) => {
  const { movieId } = props;

  return (
    <YouTube
      videoId={getYTVideoId(movieId)}
      id={movieId}
      className={"relative"}
      iframeClassName={"w-full aspect-video"}
    />
  )
}