import React from "react";

interface Props {
  title: string;
  content: string;
}

const CastSection: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <h2 className="text-xl text-black mb-2 mt-4">{title}</h2>
      <div>
        <span className="text-gray-600">{content}</span>
      </div>
    </>
  );
};

export default CastSection;
