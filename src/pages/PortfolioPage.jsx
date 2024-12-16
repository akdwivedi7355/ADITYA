import Header from "../components/Header";
import Footer from "../components/Footer";

const PortfolioPage = () => (
  <div>
    <Header />
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg">Project 1</h3>
          <p className="text-sm text-gray-600">Description of Project 1</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg">Project 2</h3>
          <p className="text-sm text-gray-600">Description of Project 2</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg">Project 3</h3>
          <p className="text-sm text-gray-600">Description of Project 3</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PortfolioPage;
