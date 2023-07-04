import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ContactComponent } from '../../contact';
import { HomeComponent } from '../../home';
import { TilesComponent } from '../../tiles';
import { TopPanelComponent } from '../../layout/top-panel';
import {DetailsComponent} from "../../tiles/details";
import {FooterComponent} from "../footer";
const strapiBaseUrl = process.env.REACT_APP_STRAPI_BASE_URL

const MainComponent = () => {
  console.log(strapiBaseUrl)
  return (
    <Router>
      <TopPanelComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/blog" element={<TilesComponent pageName={"Blog"} dataLink={`${strapiBaseUrl}/blog`}/>} />
        <Route path="/blog/:id" element={<DetailsComponent/>} />
        <Route path="/teaching" element={<TilesComponent pageName={"Teaching"} dataLink={`${strapiBaseUrl}/articles`}/>} />
        <Route path="/teaching/:id" element={<DetailsComponent/>} />
        <Route path="/proverbs" element={<TilesComponent pageName={"Proverbs"} dataLink={`${strapiBaseUrl}/proverbs`}/>} />
        <Route path="/proverbs/:id" element={<DetailsComponent/>} />
        <Route path="/podcasts" element={<TilesComponent pageName={"Podcasts"} dataLink={`${strapiBaseUrl}/podcasts`}/>} />
        <Route path="/podcasts/:id" element={<DetailsComponent/>} />
        <Route path="/testimonies" element={<TilesComponent pageName={"Testimonies"} dataLink={`${strapiBaseUrl}/testimonies`}/>} />
        <Route path="/testimonies/:id" element={<DetailsComponent/>} />
        <Route path="/parables" element={<TilesComponent pageName={"Parables"} dataLink={`${strapiBaseUrl}/parables`}/>} />
        <Route path="/parables/:id" element={<DetailsComponent/>} />
        <Route path="/books" element={<TilesComponent pageName={"Books"} dataLink={`${strapiBaseUrl}/books`}/>} />
        <Route path="/books/:id" element={<DetailsComponent/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
      <FooterComponent/>
    </Router>

  );
}

export default MainComponent;
