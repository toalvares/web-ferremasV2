/* empty css                          */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, h as renderComponent } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="shortcut icon" href="/public/favicon.png" type="image/x-icon"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])}  </body> </html> `;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/layouts/Layout.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/icons/Search.astro", void 0);

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 size-7"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path> </svg>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/icons/Cart.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class=""> <nav class="flex flex-col items-center justify-center
    md:flex-row md:justify-evenly md:gap-16 md:px-16 md:py-7
  bg-[#232F3E] text-white"> <a href="../"> <img src="../FerreMaxicon.png" alt="" class="md:w-96"> </a> <div class="flex items-center"> <!-- Buscador --> <form class="w-[600px]"> <div class="md:relative flex justify-center"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> ${renderComponent($$result, "Search", $$Search, {})} </div> <input type="search" id="default-search" class="block md:w-full p-4 ps-10 border text-black border-gray-300 rounded-lg focus:ring-2 bg-gray-50 focus:ring-orange-400 focus:border-orange-400 focus:outline-none" placeholder="Buscador" required> <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button> </div> </form> </div> <!-- Cuenta --> <div id="account"> <a href="../login">Iniciar sesion</a>
/
<a href="../registro">Registrarse</a> </div> <!-- Carrito --> <a href="../carro"> <div class="relative py-2"> <div class="t-0 absolute left-3"> <p class="flex size-4 items-center justify-center rounded-full bg-orange-500 p-3 text-md text-white">
3
</p> </div> ${renderComponent($$result, "Cart", $$Cart, {})} </div> </a> </nav> <!-- Menu --> <nav class="flex flex-row justify-center items-center"> <ul class="flex flex-row justify-center items-center px-16 py-7 gap-32"> <li> <a href="../" class="text-lg font-semibold hover:text-orange-500">Inicio</a> </li> <li> <a href="../productos" class="text-lg font-semibold hover:text-orange-500">Productos</a> </li> <li> <a href="../sobrenosotros" class="text-lg font-semibold hover:text-orange-500">Sobre nosotros</a> </li> <li> <a href="../contacto" class="text-lg font-semibold hover:text-orange-500">Contacto</a> </li> </ul> <!-- Divisas --> <div class="absolute right-16"> <select name="currency" id="currency" class="text-sm border text-black border-gray-300 rounded-lg focus:ring-2 bg-gray-50 focus:ring-orange-400 focus:border-orange-400 focus:outline-none"> <option value="clp">CLP</option> <option value="usd">USD</option> </select> </div> </nav> <hr class="border-t-2 border-gray-300"> </header>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/components/Header.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Pagina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} <div class="flex flex-col justify-center items-center"> <h1 class="flex justify-center items-center text-3xl font-bold pt-40">Pagina no encontrada</h1> </div> </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/404.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _404 as _, $$Layout as a };
