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
        <Route path="/teaching" element={<TeachingComponent/>} />
        <Route path="/teaching/:id" element={<DetailsComponent/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
    </Router>
  );
}

export default MainComponent;
