/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './404_f_KiSLzS.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="bg-gray-50 dark:bg-gray-900 h-screen"> <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> <a href="../" class="flex items-center justify-center mt-4 mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> <img class="w-96 mr-2" src="/FerreMaxicon.png" alt="logo"> </a> <div class="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> <div class="p-6 space-y-4 md:space-y-6 sm:p-8"> <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
Inicia sesión con tu cuenta
</h1> <form class="space-y-4 md:space-y-6" action="post"> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label> <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="" required> </div> <div> <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label> <input type="password" name="password" id="password" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required> </div> <div class="flex items-center justify-between"> <div class="flex items-start"> <div class="flex items-center h-5"> <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required> </div> <div class="ml-3 text-sm"> <label for="remember" class="text-gray-500 dark:text-gray-300">Recuérdame</label> </div> </div> <a href="../../404" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</a> </div> <button type="submit" class="w-full font-semibold text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button> <p class="font-light text-gray-500">
¿Aún no tienes cuenta? <a href="../registro" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate</a> </p> </form> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/login.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
