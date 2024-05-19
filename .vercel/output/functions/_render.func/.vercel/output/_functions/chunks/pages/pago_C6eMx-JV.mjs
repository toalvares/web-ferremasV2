/* empty css                          */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_oEZ_-BnD.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout, $ as $$Header } from './404_f_KiSLzS.mjs';

const $$Payment = createComponent(async ($$result, $$props, $$slots) => {
  const apiKeyId = "597055555532";
  const apiKeySecret = "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C";
  const res = await fetch(
    "https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions",
    {
      method: "POST",
      headers: {
        "Tbk-Api-Key-Id": apiKeyId,
        "Tbk-Api-Key-Secret": apiKeySecret,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        buy_order: 123456789,
        session_id: "session123455754",
        amount: 1e4,
        return_url: "https://web-ferremas.vercel.app"
      })
    }
  );
  const { token, url } = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paga tus productos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center h-screen"> <a${addAttribute(url + "?token_ws=" + token, "href")} class="text-white font-semibold bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-lg px-6 py-3 text-center transition-colors duration-200 ease-in-out">Pagar</a> </div> ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/components/Payment.astro", void 0);

const $$Pago = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FerremaX | Las mejores herramientas del mercado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Payment", $$Payment, {})} </main>  ` })}`;
}, "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/pago.astro", void 0);

const $$file = "C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/pago.astro";
const $$url = "/pago";

export { $$Pago as default, $$file as file, $$url as url };
