import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Movie from "../components/Movie";
import Detail from "./Detail";
function Home(){
   return (
    <Router>
        <switch>
            {/* path에서 url의 데이터를 받음 */}
            <Route path="/movieDetail/:id/:title">
                <Detail/>
            </Route>
            <Route path="/movieList">
                <Movie/>
            </Route>
        </switch>
    </Router>

   );
}
export default Home;