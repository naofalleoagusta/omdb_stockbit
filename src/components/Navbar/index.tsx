import React, { useState } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
// import { FaSearch } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";
// import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Navbar: React.FC<{}> = () => {
  const location = useLocation<any>();
  const history = useHistory();
  const value = location.search.slice(3, location.search.length);
  const [search, setSearch] = useState<string>(value);

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <Background color="bg-white z-10  shadow-md ">
      <Section yPadding="py-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center">
          <span className="font-bold text-lg">SearchMovie</span>
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              history.push({
                pathname: `/search`,
                search: `?s=${search}`,
              });
            }}
          >
            <div>
              <input
                type="text"
                className="w-60 h-full border-solid border-2 px-2 rounded-sm border-gray-600"
                value={search}
                onChange={handleChange}
              />
            </div>
            <input
              className="bg-black py-1 px-4 text-white font-semibold"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </Section>
    </Background>
  );
};

export default Navbar;
