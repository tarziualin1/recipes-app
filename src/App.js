import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiBookCover } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={`/`}>
            <StyledIcon />
            Recipes
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const StyledIcon = styled(GiBookCover)`
  color: #ef6330;
`;

const Logo = styled(Link)`
  background: linear-gradient(to right, #f27121, #e94057);
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin: 0 auto;
`;

const Nav = styled.div`
  padding: 2rem 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
