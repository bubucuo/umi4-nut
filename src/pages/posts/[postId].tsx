import { useParams } from "umi";

export default function Post(props) {
  const params = useParams();
  return (
    <div>
      <h3>Post</h3>
      <p>{params.postId}</p>
    </div>
  );
}
