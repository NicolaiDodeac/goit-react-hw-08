import DocumentTitle from "../../components/DocumentTitle";
import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={s.container}>
        <h1 className={s.title}>
          Contact-Book welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
