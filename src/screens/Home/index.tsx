import React from "react";
import { Background } from "../../atoms/Background";
import { Section } from "../../atoms/Section";

const Home: React.FC<{}> = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-12">
         <div className="text-center">
           <h1 className="font-extrabold text-5xl mb-4">Find Your Movie Now!</h1>
           <p className="font-base text-lg"><b>SearchMovie</b> is a platform where you can find your favorite movie easily.</p>
         </div>
      </Section>
    </Background>
  );
};

export default Home;
