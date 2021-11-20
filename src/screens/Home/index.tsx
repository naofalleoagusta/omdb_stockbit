import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";
// import { getOption } from "../../redux/options/action";
// import { OptionProps } from "../../redux/options/type";
// import { useSelector, useDispatch } from "react-redux";
// import Select from "react-select";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const Home: React.FC<{}> = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  // let { options } = useSelector(({ options }: { options: OptionProps }) => {
  //   return options;
  // });
  // useEffect(() => {
  //   dispatch(getOption("batman"));
  // }, []);
  // const onKeyUp = (e: any) => {
  //   if (e.key !== "Backspace" && e.key !== "CapsLock") {
  //     setValue(value + e.key);
  //   }
  // };

  const handleChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <Background color="bg-white">
      <Section yPadding="py-12" isFullVH isCentered>
        <div className="text-center">
          <h1 className="font-extrabold text-5xl mb-4">SearchMovie</h1>
          <p className="font-base text-lg">
            <b>SearchMovie</b> is a platform where you can find your favorite
            movie easily.
          </p>
          <p className="font-base text-lg mb-4">
            Find your favorite movie, now!
          </p>

          <form
            className="flex justify-center text-left"
            onSubmit={(e) => {
              history.push({
                pathname: `/search`,
                search: `?s=${value}`,
              });
            }}
          >
            <div>
              {/* <Select
                options={options}
                className="w-80 rounded-none"
                placeholder="Batman"
                // onKeyDown={(e) => {
                //   console.log(e);
                //   if(e.keyCode===8){

                //   }
                // }}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
              /> */}
              <input
                type="text"
                className="w-80 h-full border-solid border-2 px-2 rounded-sm border-gray-600"
                value={value}
                onChange={handleChange}
              />
            </div>
            <input
              className="bg-black py-1 px-4  text-white font-semibold"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </Section>
    </Background>
  );
};

export default Home;
