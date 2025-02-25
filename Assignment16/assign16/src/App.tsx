import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProdDetails";
import Categories from "./components/Categories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/categories">Categories</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
