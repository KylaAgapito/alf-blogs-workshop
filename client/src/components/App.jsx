import ArticleSection from "./ArticleSection";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const App = () => {
   return (
    <div className="wrapper">
       <Navbar />
       <Hero />
       <ArticleSection />
       <CtaSection />
       <Footer />
    </div>
   );
};

export default App;