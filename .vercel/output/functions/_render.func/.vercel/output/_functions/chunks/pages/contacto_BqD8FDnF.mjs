/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './404_f_KiSLzS.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> ${renderComponent($$result2, "Header", $$Header, {})} <!-- Formulario de contacto --> <section class="py-20 "> <div class="container mx-auto px-4"> <div class="max-w-xl mx-auto"> <h2 class="text-4xl font-bold text-center text-gray-800">Contacto</h2> <p class="text-center text-gray-600 mt-4 text-lg">¿Tienes alguna duda o necesitas información adicional? Envíanos tus datos y nos pondremos en contacto contigo a la brevedad.</p> <form action="" method="POST" class="mt-8"> <div class="grid grid-cols-1 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="name" name="name" class="mt-1 block w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label> <input type="email" id="email" name="" class="w-full bg-gray-300 mt-1 block focus:outline-none focus:ring-orange-500 focus:border-orange-500"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label> <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" required></textarea> </div> <div> <button type="submit" class="w-full py-2 px-2  border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500">Enviar</button> </div> </div> </form> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };
