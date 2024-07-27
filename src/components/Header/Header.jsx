import Button from "../Button/Button";
import Search from "../Search/Search";
import "./header.css";

const Header = () => {
  const handleSearch = (searchTerm) => {};
  return (
    <div className="app__header">
      <div className="app__header-brand">
        <h1>DEV@Deakin</h1>
      </div>
      <Search onSearch={handleSearch} />
      <div className="app__header-buttons">
        <Button>Post</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
