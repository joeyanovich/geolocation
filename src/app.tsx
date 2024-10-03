import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Map } from "./components/main/map";

export function App() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="flex-grow">
        <Map />
      </div>
      <Footer />
    </div>
  );
}
