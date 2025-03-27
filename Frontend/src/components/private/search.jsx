import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitSearchDataFunc = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search-container text-center p-5 mb-4" 
            style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, 
            backgroundSize: "cover",

            }} >
      
      <h2 className="text-dark fw-bold">Find Your Movie</h2>
      <InputGroup className="mt-3 w-50 mx-auto">
        <FormControl
          placeholder="Search Movies"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              submitSearchDataFunc();
            }
          }}
        />
        <Button variant="warning" onClick={submitSearchDataFunc}>Search</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
