/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './404_f_KiSLzS.mjs';
import { $ as $$Products } from './index_DoOQ5WFz.mjs';

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Products", $$Products, {})} </main> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/productos.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/productos.astro";
const $$url = "/productos";

export { $$Productos as default, $$file as file, $$url as url };
