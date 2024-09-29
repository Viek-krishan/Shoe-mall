import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <div className="error-text">
        <h1>Oops.....</h1>
        <h2>Something went wrong!!!</h2>
        <h2>{err.status + " : "+ err.statusText }</h2>
      </div>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cambridge.org%2Felt%2Fblog%2Fsad-face-emoji%2F&psig=AOvVaw17t3vfZriGLQoD9P4mghIP&ust=1704901810455000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiWvKjU0IMDFQAAAAAdAAAAABAE"
        alt="Sad"
        id="sad-emojee"
      />
    </div>
  );
};

export default Error;
