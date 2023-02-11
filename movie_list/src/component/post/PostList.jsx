import { Link, useOutlet, useOutletContext } from "react-router-dom";

function PostList() {
  const { posts } = useOutletContext();

  const { data, isLoading } = posts;

  //console.log(context);

  if (isLoading) return;
  console.log(data);

  return (
    <div>
      <ul>
        {/*<li>게시물1</li>
        <li>게시물2</li>
        <li>게시물3</li> */}
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/post/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
