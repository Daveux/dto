import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { BlogComponent } from '../../blog';
import { ContactComponent } from '../../contact';
import { HomeComponent } from '../../home';
import { TeachingComponent } from '../../teaching';
import { TopPanelComponent } from '../../layout/top-panel';
import {DetailsComponent} from "../../teaching/details";

const MainComponent = () => {
  return (
    <Router>
      <TopPanelComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/blog" element={<BlogComponent/>} />
        <Route path="/blog/:id" element={<DetailsComponent/>} />
        <Route path="/teaching" element={<TeachingComponent/>} />
        <Route path="/teaching/:id" element={<DetailsComponent/>} />
        <Route path="/proverbs" element={<TeachingComponent/>} />
        <Route path="/proverbs/:id" element={<DetailsComponent/>} />
        <Route path="/podcast" element={<TeachingComponent/>} />
        <Route path="/podcast/:id" element={<DetailsComponent/>} />
        <Route path="/testimonies" element={<TeachingComponent/>} />
        <Route path="/testimonies/:id" element={<DetailsComponent/>} />
        <Route path="/parables" element={<TeachingComponent/>} />
        <Route path="/parables/:id" element={<DetailsComponent/>} />
        <Route path="/books" element={<TeachingComponent/>} />
        <Route path="/books/:id" element={<DetailsComponent/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
    </Router>
  );
}

export default MainComponent;
