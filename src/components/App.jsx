import Header from "./layout/header/Header";
import "./App.css";
import VideoChat from "./videoChat/VideoChat";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <main className="mainContent">
          <VideoChat />
        </main>
      </div>
      <footer className="mainFooter">Footer</footer>
    </>
  );
}

export default App;
