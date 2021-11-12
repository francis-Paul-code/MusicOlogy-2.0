import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div style={{ position: "relative",height:"10%",marginTop:"30%", display: "flex" }}>
      <Spinner animation="border" variant="danger" style={{margin:"auto"}} />
    </div>
  );
};
 export default LoadingPage;
