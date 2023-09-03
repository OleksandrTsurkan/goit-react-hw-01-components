

//=============
// import  data from './data.json';
// import { Head } from '../Head/Head';
// import css from './card.module.css';

//import clsx from 'clsx'; 

// import { Container, Photo } from './card.styled';


// export const Card = ({isOnsile}) => {
//   return data.map(photo => {
//     return (
//       <Container key={photo.id} isHide={isOnsile}>
//         <Photo
//           src={photo.thumbnailUrl}
//           alt={photo.title}
//           className={css.photo}
//         />
//         <div>
//           <h5>{photo.title}</h5>
//           <Head id='id-123' clas='card-title'> gggg</Head>
//           <a href="http">
//             Go somewhere
//           </a>
//         </div>
//       </Container>
//     );
//   });
// };

// modules
// export const Card = ({isOnsile}) => {
//   return data.map(photo => {
//     return (
//       <div key={photo.id} className={clsx(css.main, isOnsile && css.red, !isOnsile && css.blue )}>
//         <img
//           src={photo.thumbnailUrl}
//           alt={photo.title}
//           className={css.photo}
//         />
//         <div>
//           <h5>{photo.title}</h5>
//           <Head id='id-123' clas='card-title'> gggg</Head>
//           <a href="http">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// };








// ========= Bootstrap
// export const Card = () => {
//   return data.map(photo => {
//     return (
//       <div key={photo.id} className="card" style={{ width: '18rem' }}>
//         <img
//           src={photo.thumbnailUrl}
//           className="card-img-top"
//           alt={photo.title}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{photo.title}</h5>
//           <Head id='id-123' clas='card-title'> gggg</Head>
//           <a href="http" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// };