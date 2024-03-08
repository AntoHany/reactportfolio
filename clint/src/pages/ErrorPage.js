import { Link } from "react-router-dom";
import "./ErrorPage.css"

function ErrorPage(){
  return(
    <div className="error">
      <div>
        <span>404</span> not found 
          <br />
        <Link to="/"> home</Link>
      </div>
    </div>
  )
}
export default ErrorPage;