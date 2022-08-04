import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Venue from './components/Venue/Venue';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';

function App() {
  const album = [img1, img2, img3, img4];

  return (
    <>
      <Header />
      <About />
      <Venue />
      <Register />
      <Gallery album={album} />
    </>
  );
}

export default App;
