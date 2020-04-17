import React, { useState } from "react";
import { Link } from "react-router-dom";

import Albums from "./Albums";

//styles
import {
  KardSelectorContainer,
  WhichKardWrapper,
  CategoryKardWrapper,
  KardCategoryOutterContainer,
  KardCategoryTitle,
  KardButtonMain,
  MainKardImage,
  KardCategoryContainer,
  MainKardText,
} from "../App.styles";
import musicIcon from "../assets/images/album.png";

// const AlbumsContainer = () => {
//   return (
//     <>
//       <KardCategoryOutterContainer>
//         <KardCategoryTitle style={{ background: "#e6fff7", color: "black" }}>
//           Album
//         </KardCategoryTitle>
//         <KardCategoryContainer
//           style={{
//             boxShadow: "7px 7px 5px 0px #e6fff7",
//           }}
//         >
//           {faveAlbum === null ? (
//             <>
//               <Link to="/albums">
//                 <MainKardImage
//                   src={musicIcon}
//                   alt=""
//                   style={{ maxHeight: "75%" }}
//                   // onClick={() => setSelectedKard(1)}
//                 />
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link to="/albums">
//                 <MainKardImage
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                   }}
//                   src={faveAlbum.artworkUrl60}
//                   alt="Album cover"
//                   // onClick={() => setSelectedKard(1)}
//                 />
//               </Link>
//               <MainKardText>{faveAlbum.collectionName}</MainKardText>
//             </>
//           )}
//         </KardCategoryContainer>
//       </KardCategoryOutterContainer>

//       {/* <Albums chgAlbum={chgAlbum}></Albums> */}
//     </>
//   );
// };

// export default AlbumsContainer;
