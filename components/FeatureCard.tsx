import React from "react";

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ category, title, description, bgColor ,width}) => {
  return (
    <div className={`rounded-2xl p-6  text-white ${bgColor}  ${width}  mx-auto shadow-lg h-[400px]`}>
      <h4 className="text-sm font-semibold uppercase opacity-80">{category}</h4>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-m opacity-90 mt-6">{description}</p>
      <button className="mt-18 bg-white text-gray-800 px-4 py-2 rounded-md font-semibold shadow">
        Read more
      </button>
    </div>
  );
};

export default FeatureCard;
