import { useState, useEffect } from "react";

function LikeDislikeTracker() {
  const [likes, setLikes] = useState(0);
  const [disLike, setDislikes] = useState(0);

  const [totalActions, setTotalActions] = useState(0);

  useEffect(() => {
    setTotalActions(likes);
    console.log("rendering useEffect");
  }, [likes]);

  return (
    <>
      <p>Likes : {likes}</p>
      <p>Dislikes : {disLike}</p>
      <p>Total Actions of Like : {totalActions}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <button onClick={() => setDislikes(disLike + 1)}>DislLike</button>
    </>
  );
}

export default LikeDislikeTracker;
