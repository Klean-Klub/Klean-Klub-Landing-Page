import { Link } from "react-router-dom";
import "./css/404.css";

const Error404Page = () => {
    return ( 
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404"></div>
			<h1>404</h1>
			<h2>Oops! Page Not Found</h2>
			<p>Sorry but the page you are looking for does not exist, been removed or is temporarily unavailable</p>
			{/* <a href="#">Back to homepage</a> */}
            <Link to="/">Back to homepage</Link>
		</div>
	</div>
     );
}
 
export default Error404Page;