import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="text-center p-5">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loader;
