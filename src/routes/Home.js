import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Movie from "../components/Movie";
import Detail from "./Detail";
function Home(){
   return (
    <Router>
        <switch>
            <Route path="/movieDetail/:id">
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