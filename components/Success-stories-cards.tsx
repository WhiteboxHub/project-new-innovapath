// // tidy-next\components\Success-stories-cards.tsx
// import Image from "next/image";

// const marketplaces = [
//   {
//     id: 1,
//     title: "AI Model Hubs",
//     image: "/images/cards/card.png",  
//     description: "Explore pre-trained AI models for various tasks.",
// },
// {
//     id: 2,
//     title: "Data Marketplaces",
//     image: "/images/cards/card.png",  
//     // image: "/data-marketplace.jpg",
//     description: "Buy and sell datasets for machine learning.",
// },
// {
//     id: 3,
//     title: "Compute Resources",
//     // image: "/compute-resources.jpg",
//     image: "/images/cards/card.png",  
//     description: "Rent GPU/TPU instances for AI training.",
//   },
// //   {
// //     id: 4,
// //     title: "AutoML Platforms",
// //     // image: "/automl.jpg",
// //     description: "Automate ML model creation and deployment.",
// //   },
// ];

// export default function Marketplaces() {
//   return (
//     <div className="bg-gray-100 py-10 px-5">
//       <h2 className="text-3xl font-bold text-center mb-6">AI/ML Marketplaces</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {marketplaces.map((marketplace) => (
//           <div
//             key={marketplace.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//           >
//             <Image
//               src={marketplace.image}
//               alt={marketplace.title}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{marketplace.title}</h3>
//               <p className="text-gray-600 mt-2">{marketplace.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
