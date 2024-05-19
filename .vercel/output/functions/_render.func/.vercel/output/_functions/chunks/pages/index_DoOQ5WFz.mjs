/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as createAstro, h as renderComponent } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './404_f_KiSLzS.mjs';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Productos = asDrizzleTable("Productos", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Productos", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Productos", "primaryKey": false, "optional": false } }, "price": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "price", "collection": "Productos", "primaryKey": false, "optional": false } }, "brand": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "brand", "collection": "Productos", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Productos", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, name, brand, price, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:border-gray-400 hover:transition-all hover:translate-y-1 duration-150 ease-in-out"> <a${addAttribute(`../detalle/`, "href")}> <p>${id}</p> <img class="p-2 rounded-t-lg w-full h-80 object-cover object-center"${addAttribute(image, "src")} alt="product image"> </a> <div class="px-5 pb-5"> <a${addAttribute(`../detalle/`, "href")}> <span class="text-xs tracking-tight">${brand}</span> </a> <a${addAttribute(`../detalle/`, "href")}> <h5 class="font-semibold tracking-tight text-gray-900"> ${name} </h5> </a> <!-- Estrellas --> <div class="flex items-center mt-2.5 mb-5"> <div class="flex items-center space-x-1 rtl:space-x-reverse"> <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> </div> <span class="bg-blue-100 text-orange-500 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> </div> <!-- Precio --> <div class="flex items-center justify-between"> <span class="text-xl font-bold text-gray-900 dark:text-white">${price}</span> <a href="../carro" class="text-white font-semibold bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-sm px-3 py-2.5 text-center transition-colors duration-200 ease-in-out">Añadir al carro</a> </div> </div> </div>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/components/Card.astro", void 0);

const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const productos = await db.select().from(Productos);
  return renderTemplate`${maybeRenderHead()}<section class="h-screen"> <div class="grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:px-5 pt-16 2xl:px-20"> ${productos.map((productos2) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": productos2.id, "name": productos2.name, "brand": productos2.brand, "image": productos2.image, "price": productos2.price })}`)} </div> </section>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/components/Products.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="default-carousel" class="relative w-full pt-10 px-20" data-carousel="slide"> <!-- Carousel wrapper --> <div class="relative h-56 overflow-hidden rounded-lg md:h-[550px]"> <!-- Item 1 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/slider1.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <!-- Item 2 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/slider2.png" class="absolute 'block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <!-- Item 3 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/slider3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> <button type="button" class="size-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="size-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="size-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> </div> <!-- Slider controls --> <!-- <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-24 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 group-hover:bg-orange-500/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 group-hover:bg-orange-500/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button> --> </div>`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/components/Carousel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Carousel", $$Carousel, {})} ${renderComponent($$result2, "Products", $$Products, {})} </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/index.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Products as $, index as i };
