import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Map } from "./components/main/map";
import { Modal } from "./components/modal";

export function App() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="flex-grow">
        {/* <Map /> */}
        <Modal />
      </div>
      <Footer />
    </div>
  );
}
