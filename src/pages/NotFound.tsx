import "../styles/pages/not_found.scss";

const NotFound = () => {
  return (
    <div className="page-contents NotFoundPage">
      <h1 className="PageTitle">404 Page Not Found</h1>
      <p>
        Sorry, the page you were looking for could not be found.
        <br />
        Try picking one of the pages from the navigation bar above instead.
      </p>
    </div>
  );
};

export default NotFound;
