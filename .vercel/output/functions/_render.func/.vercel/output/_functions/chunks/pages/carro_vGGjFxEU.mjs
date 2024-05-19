/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './404_f_KiSLzS.mjs';

const $$Carro = createComponent(($$result, $$props, $$slots) => {
  const { total } = {
    total: "30000"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} <!-- Vista del carro de productos --> <section class="container mx-auto py-12"> <h1 class="text-4xl text-center font-bold text-gray-800">
Carrito de compras
</h1> <!-- Si el carro está vacío --> <!-- <div class="flex flex-col items-center mt-6" hidden>
        <Cartempty />
        <p class="text-xl text-gray-800 mt-4">Tu carro de compras está vacío</p>
        <a href="../productos" class="text-orange-500 underline mt-2">Ir a productos</a>
      </div> --> <!-- Si el carro no está vacío --> <div class="flex flex-col items-center mt-6" hidden> <div class="flex items-center justify-between w-full border-b border-gray-200 py-2"> <p class="text-xl text-gray-800">Producto</p> <p class="text-xl text-gray-800">Precio</p> <p class="text-xl text-gray-800">Cantidad</p> <p class="text-xl text-gray-800">Total</p> </div> <div class="flex items-center justify-between w-full border-b border-gray-200 py-2"> <div class="flex items-center"> <img src="/productos/soldadora.jpg" class="w-16 h-16 object-cover rounded-lg" alt="Producto 1"> <p class="text-lg text-gray-800 ml-4">Producto 1</p> </div> <p class="text-lg text-gray-800">$100.000</p> <p class="text-lg text-gray-800">1</p> <p class="text-lg text-gray-800">$100.000</p> </div> <div class="flex items-center justify-between w-full border-b border-gray-200 py-2"> <div class="flex items-center"> <img src="/productos/fresadora.jpg" class="w-16 h-16 object-cover rounded-lg" alt="Producto 2"> <p class="text-lg text-gray-800 ml-4">Producto 2</p> </div> <p class="text-lg text-gray-800">$200.000</p> <p class="text-lg text-gray-800">2</p> <p class="text-lg text-gray-800">$400.000</p> </div> <div class="flex items-center justify-between w-full border-b border-gray-200 py-2"> <div class="flex items-center"> <img src="/productos/kit.jpg" class="w-16 h-16 object-cover rounded-lg" alt="Producto 3"> <p class="text-lg text-gray-800 ml-4">Producto 3</p> </div> <p class="text-lg text-gray-800">$300.000</p> <p class="text-lg text-gray-800">3</p> <p class="text-lg text-gray-800">$900.000</p> </div> <div class="flex items center justify-between w-full border-b border-gray-200 py-2"> <p class="text-lg text-gray-800 font-bold">Total</p> <p class="text-lg text-gray-800 font-bold">$${total}</p> </div> <div class="flex items-center justify-between w-full mt-6"> <a href="/productos" class="text-orange-500 underline">Seguir comprando</a> <a${addAttribute("/pago", "href")} class="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg">Pagar</a> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/carro.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/carro.astro";
const $$url = "/carro";

export { $$Carro as default, $$file as file, $$url as url };
