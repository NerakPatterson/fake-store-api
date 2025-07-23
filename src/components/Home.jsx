import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container className="mt-4">
      <div
        className="border border-2 bg-white rounded p-4 text-center w-100"
        style={{ margin: "0 auto" }}
      >
        <h1 className="my-5">Welcome To Our Fake Store</h1>
        <p className="my-5">
          This is a simple e-commerce application built with React and
          Bootstrap. This store doesn't exist. You are in the matrix.
        </p>
        <Link to="/product"> {/*View All Product*/}
          <Button variant="dark" className="text-white border border-3 border-secondary rounded">
            View all products
          </Button>
        </Link> 
      </div>
    </Container>
  );
};

export default Home;