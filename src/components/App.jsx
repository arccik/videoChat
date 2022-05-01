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
        <footer className="mainFooter"></footer>
      </div>
    </>
  );
}

export default App;
