// import React from "react";
// import { Link } from "react-router-dom";

// function MainFeed({ pokemons }) {
//   return (
//     <div className="mainfeed">
//       <ul style={{ display: "flex", flexWrap: "wrap" }}>
//         {pokemons.length > 0 ? (
//           pokemons.map((pokemon) => (
//             <div className="card">
//               <article>
//                 <h1>{pokemon.name}</h1>
//                 <p>
//                   <strong>Location:</strong> <em>{pokemon.location}</em>
//                 </p>
//                 <p>
//                   <strong>Signature Move:</strong> <em>{pokemon.move}</em>
//                 </p>
//               </article>
//               <Link className="btn" to={`/pokemon/${pokemon.id}`}>
//                 View
//               </Link>
//             </div>
//           ))
//         ) : (
//           <>
//             <p className="loading-text">Still loading, please wait...</p>
//           </>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default MainFeed;
