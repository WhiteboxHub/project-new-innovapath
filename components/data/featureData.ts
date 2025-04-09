// tidy-next\components\data\featureData.ts
// const featureData = [
//     {
//       id: 1,
//       category: "AI TRAINING",
//       title: "Ranking and optimizing RAG AI models for enterprise",
//       description: "Refining annotated data with ideal responses, enhancing model responses.",
//       bgColor: "bg-gradient-to-r from-red-800 to-purple-900",
//       width: "w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
//     },
//     {
//       id: 2,
//       category: "TECHNOLOGY",
//       title: "Access the Best Pre-Trained AI Models",
//       description: "Saved $450K and reduced claim response time by 50%.",
//       bgColor: "bg-gradient-to-r from-indigo-800 to-purple-900",
//       width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
//     },
//     {
//       id: 3,
//       category: "ASSET MANAGEMENT",
//       title: "Achieving 8x faster claims processing for Headway",
//       description: "Optimizing a workflow to skyrocket claims processing speed.",
//       bgColor: "bg-gradient-to-r from-yellow-500 to-orange-400",
//       width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
//     },
//     {
//       id: 4,
//       category: "MARKET PLACES",
//       title: "Boosting marketplace efficiency with AI",
//       description: "Automating key business functions for greater scalability.",
//       bgColor: "bg-gradient-to-r from-blue-600 to-blue-400",
//       width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
//     },
//   ];
  
//   export default featureData;
  


// components/data/featureData.ts
import {
  AcademicCapIcon,          
  CpuChipIcon,             
  BanknotesIcon,           
  BuildingStorefrontIcon 
} from '@heroicons/react/24/solid'

const featureData = [
  {
    id: 1,
    category: "AI TRAINING",
    title: "Ranking and optimizing RAG AI models for enterprise ",
    description: "Refining annotated data with ideal responses, enhancing model responses.Retrieval-Augmented Generation (RAG) is rapidly becoming a cornerstone for enterprise AI solutions. By combining the strengths of large language models (LLMs) with real-time retrieval of domain-specific data, RAG enables enterprises to generate accurate, up-to-date, and context-aware responses. However, to unlock its full potential at scale, ranking and optimization are critical.",
    bgColor: "bg-gradient-to-r from-red-800 to-purple-900",
    width: "w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
    icon: AcademicCapIcon
  },
  {
      id: 2,
      category: "TECHNOLOGY",
      title: "Access the Best Pre-Trained AI Models",
      description: "Access the best pre-trained AI models and accelerate your innovation with cutting-edge technology built by industry leaders. These models are designed to handle complex tasks like natural language processing, computer vision, and data prediction—without the need for expensive training or deep technical overhead. Whether you're building intelligent apps, automating workflows, or enhancing user experiences, our pre-trained AI solutions provide high performance, scalability, and seamless integration to bring your ideas to life faster.",
      bgColor: "bg-gradient-to-r from-indigo-800 to-purple-900",
      width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
      icon: CpuChipIcon
  },
  {
      id: 3,
      category: "ASSET MANAGEMENT",
      title: "Achieving 8x faster claims processing for Headway",
      description: "Leverage the power of AI to transform asset management with smarter insights, faster decision-making, and greater operational efficiency. Pre-trained AI models can analyze large volumes of financial and operational data in real-time—detecting patterns, predicting market shifts, and optimizing portfolio strategies. From risk assessment and compliance to predictive maintenance and investment forecasting, AI enhances every aspect of asset management, helping firms stay agile, data-driven, and ahead of the curve in a competitive landscape.",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-400",
      width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
      icon: BanknotesIcon
  },
  {
      id: 4,
      category: "MARKET PLACES",
      title: "Boosting marketplace efficiency with AI",
      description: "AI is revolutionizing marketplace efficiency by automating operations, optimizing supply and demand, and delivering personalized user experiences at scale. From intelligent product recommendations and dynamic pricing to fraud detection and customer service automation, AI enables marketplaces to run smarter, faster, and more profitably. By leveraging pre-trained models, platforms can instantly analyze user behavior, streamline transactions, and make data-driven decisions—ultimately increasing conversion rates, reducing operational costs, and enhancing buyer-seller trust.",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-400",
      width:"w-full sm:w-3/4 md:w-1/2 lg:w-3/4",
      icon: BuildingStorefrontIcon
  }
]

export default featureData

