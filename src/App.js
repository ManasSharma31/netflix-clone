import request from './request.js';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner'
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
      <Row text="Netflix Trending" url={request.fetchTrending}/>
      <Row text="Netflix Originals" url={request.fetchNetflixOriginals}/>
      <Row text="Netflix Top Rated" url={request.fetchTopRated}/>
      <Row text="Netflix Action" url={request.fetchActionMovies}/>
      <Row text="Netflix Comedy" url={request.fetchComedyMovies}/>
      <Row text="Netflix Horror" url={request.fetchHorrorMovies}/>
      <Row text="Netflix Romance" url={request.fetchRomanceMovies}/>
      <Row text="Netflix Documenatries" url={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
