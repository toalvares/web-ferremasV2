// import { useStore } from "@nanostores/preact";
// import { cartItems, isCartOpen } from "../cartStore";

// export default function CartFlyout() {
//   const $isCartOpen = useStore(isCartOpen);
//   const $cartItems = useStore(cartItems);

//   return (
//     <aside
//       hidden={!$isCartOpen}
//       className="h-[600px] w-96 absolute right-0 top-28 z-50 bg-orange-500 ps-8 min-w-min border border-orange-300 ">
//       {Object.values($cartItems).length ? (
//         <ul className="text-sm text-white font-medium list-none p-4" role="list">
//           {Object.values($cartItems).map((cartItem) => (
//             <li className="text-white flex gap-4 items-center pb-8">
//               <img
//                 className="w-24 object-cover"
//                 src={cartItem.image}
//                 alt={cartItem.name}
//               />
//               <div>
//                 <h3>{cartItem.name}</h3>
//                 <p>Precio: {cartItem.price}</p>
//                 <p>Cantidad: {cartItem.quantity}</p>
//               </div>
//             </li>
//           ))}
//           <a href={"/carro/"}>Ir al carro</a>
//         </ul>
//       ) : (
//           <p className="text-white text-center font-semibold text-2xl pt-6">Tu carro esta vacio</p>
//       )}
//     </aside>
//   );
// }
