import { useEffect, useState } from "react";
import "../styles/ArticleSection.css"
import Button from "./Button";
import Blur from "./Blur";
import CardsContainer from "./CardsContainer";
import Searchbar from "./Searchbar";
import RegularCard from "./RegularCard";
import { API_URL } from "../constants";

const cards = [
  {_id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now(), cover_photo: "/preview.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {_id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now(), cover_photo: "/preview.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {_id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now(), cover_photo: "/preview.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {_id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now(), cover_photo: "/preview.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {_id: 5, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now(), cover_photo: "/preview.png", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
];

const ArticleSection = () => {

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cards, setCards] = useState([]);

  const isCardMatch = (val, card) => {
    const titleMatch = card.title.toLowerCase().includes(val.toLowerCase().trim());
    return (val.length != 0 && titleMatch) || val.length == 0;
  };

  const handleCardSearch = (value) => {
    const cardsMatched = []

    setSearchText(value);
    cards.forEach((card) => {
      if (isCardMatch(value, card)) {
        cardsMatched.push(<RegularCard key={card._id} {...card} />)
      }
    });

    setSearchResult(cardsMatched);
  };

  useEffect(() => {
    handleCardSearch(searchText);
    
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`)
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();

  }, []);

  return (
    <div id="articleSection">
        <Blur
        h={"60%"}
        w={"45%"}
        bg={"#7000FF"}
        x={"0"}
        y={"25%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />
      <Blur
        h={"50%"}
        w={"35%"}
        bg={"#60FFE7"}
        x={"80%"}
        y={"80%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />
      <div className="article-sec-heading-container">
        <p className="article-sec-heading">Learn About Everything Tech!</p>
        <p className="article-sec-subheading">brought to you by AWSCC Department of Software and Web Development</p>
      </div>
      {cards.length > 0 && 
      <div className="article-top-container">
        <Button variant={"primary"}>Create Article</Button>
        <Searchbar searchText={searchText} setSearchText={handleCardSearch} />
      </div>
      }
      <CardsContainer isEmpty={cards.length === 0} filterResult={searchResult} searchText={searchText}/>
    </div>
  );
};

export default ArticleSection;