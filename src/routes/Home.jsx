import Hero from "../components/Hero";
import Feature from "../components/Feature";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <Hero></Hero>
      <Feature></Feature>
    </>
  );
};

export default Home;
