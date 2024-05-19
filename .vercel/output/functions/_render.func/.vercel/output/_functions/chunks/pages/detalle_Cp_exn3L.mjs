/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './404_f_KiSLzS.mjs';

const $$Detalle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} <div class="w-screen grid grid-cols-2 gap-96 xl:gap-52 2xl:gap-44 mx-auto h-screen"> <div class="xl:ml-56 md:ml-40 ml-14 pt-24"> <div class="w-[480px] 2xl:w-[620px] border border-gray-200 rounded-lg shadow-2xl hover:shadow-orange-300 hover:shadow-2xl hover:border-none hover:transition-all hover:-translate-y-1 duration-150 ease-in-out"> <img src="/productos/soldadora.jpg" alt="Imagen de tnato"> </div> </div> <div class="flex flex-col w-3/4 md:w-3/5 pt-24 text-pretty gap-y-3"> <div> <h2 class="text-3xl font-semibold">
SOLDADORA INVERTER DW120 BLACK KRAFTER 120A LHE
</h2> <p class="text-sm font-medium">Marca: Krafter</p> </div> <div class="flex flex-col gap-y-2"> <p class="text-lg font-normal text-pretty">
Descripción: Soldadora inverter de 120 amperios, con tecnología
            IGBT, ideal para trabajos de soldadura en metal, acero inoxidable,
            hierro, entre otros.
</p> <p class="text-lg font-normal">Modelo: DW120</p> <p class="text-lg font-normal">Amperaje: 120A</p> <p class="text-lg font-normal">Garantía: 1 año</p> </div> <p class="text-lg font-medium">Precio: $39.990 IVA incluido</p> <button class="bg-orange-300 text-white font-semibold py-2 px-4 w-60 rounded-lg hover:bg-orange-400 hover:transition-all hover:-translate-y-1 duration-150 ease-in-out">Comprar</button> </div> </div> </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/detalle.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/detalle.astro";
const $$url = "/detalle";

export { $$Detalle as default, $$file as file, $$url as url };
