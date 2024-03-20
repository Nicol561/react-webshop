import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, []);
  return (
    <div>
      <div className="notFound">
        <p>Page does not exist 🤷‍♂️...returning you back to the home page. </p>
      </div>
    </div>
  );
}

export default NotFound;
