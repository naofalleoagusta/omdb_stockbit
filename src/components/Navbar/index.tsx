import React, { useState } from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
// import { FaSearch } from "react-icons/fa";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Navbar: React.FC<{}> = () => {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: any) => {
    console.log(e);
  };
  return (
    <Background color="bg-white z-10  shadow-md ">
      <Section yPadding="py-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center">
          <span className="font-bold text-lg">SearchMovie</span>
          <form className="flex">
            <Select
              options={options}
              className="w-60 rounded-none"
              placeholder="Batman"
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
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
