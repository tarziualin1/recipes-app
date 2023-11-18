import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      console.log(detailData);
      setDetails(detailData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
    console.log(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div style={{ marginTop: "20px" }}>
            <p
              style={{ marginBottom: "20px" }}
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

  img {
    border-radius: 2rem;
    @media (max-width: 768px) {
      /* Apply styles for screens 768px and below */
      height: auto;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 1000px) {
    /* Apply styles for screens 768px and below */
    display: flex;
    flex-direction: column;
    margin: 2rem 0rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1000px) {
    /* Apply styles for screens 1000px and below */

    margin: 2rem 0rem;
  }
`;

export default Recipe;
