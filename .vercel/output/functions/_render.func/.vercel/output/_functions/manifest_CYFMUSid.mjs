import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_oEZ_-BnD.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/carro","isIndex":false,"type":"page","pattern":"^\\/carro\\/?$","segments":[[{"content":"carro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carro.astro","pathname":"/carro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/detalle","isIndex":false,"type":"page","pattern":"^\\/detalle\\/?$","segments":[[{"content":"detalle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/detalle.astro","pathname":"/detalle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/final","isIndex":false,"type":"page","pattern":"^\\/final\\/?$","segments":[[{"content":"final","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/final.astro","pathname":"/final","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CyXHj87M.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/pago","isIndex":false,"type":"page","pattern":"^\\/pago\\/?$","segments":[[{"content":"pago","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pago.astro","pathname":"/pago","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/pedidos","isIndex":false,"type":"page","pattern":"^\\/pedidos\\/?$","segments":[[{"content":"pedidos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pedidos.astro","pathname":"/pedidos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/productos","isIndex":false,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/registro","isIndex":false,"type":"page","pattern":"^\\/registro\\/?$","segments":[[{"content":"registro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/registro.astro","pathname":"/registro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/sobrenosotros","isIndex":false,"type":"page","pattern":"^\\/sobrenosotros\\/?$","segments":[[{"content":"sobrenosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobrenosotros.astro","pathname":"/sobrenosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9x3RUk0.js"}],"styles":[{"type":"external","src":"/_astro/carro.VOQXacTP.css"},{"type":"inline","content":"html{margin:0%;padding:0%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/pago.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/carro.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/detalle.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/final.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/pedidos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/productos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/registro.astro",{"propagation":"none","containsHead":true}],["C:/Users/Tomas/Desktop/tomy/Aprendiendo-Astro/web-ferremasV2/src/pages/sobrenosotros.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/carro.astro":"chunks/pages/carro_vGGjFxEU.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_BqD8FDnF.mjs","/src/pages/detalle.astro":"chunks/pages/detalle_Cp_exn3L.mjs","/src/pages/final.astro":"chunks/pages/final_BNQ25CQ8.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_bPGfSSF2.mjs","/src/pages/login.astro":"chunks/pages/login_5MQkVBPm.mjs","/src/pages/pago.astro":"chunks/pages/pago_C6eMx-JV.mjs","/src/pages/pedidos.astro":"chunks/pages/pedidos_DXKvoec9.mjs","/src/pages/productos.astro":"chunks/pages/productos_ClnyGBuT.mjs","/src/pages/registro.astro":"chunks/pages/registro_C28qfFcE.mjs","/src/pages/sobrenosotros.astro":"chunks/pages/sobrenosotros_DzZX2xkF.mjs","\u0000@astrojs-manifest":"manifest_CYFMUSid.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D2TdmZd4.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BfmQqCQS.mjs","\u0000@astro-page:src/pages/carro@_@astro":"chunks/carro_CtsEhNFD.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_O-8eIRtk.mjs","\u0000@astro-page:src/pages/detalle@_@astro":"chunks/detalle_Q53K4NjZ.mjs","\u0000@astro-page:src/pages/final@_@astro":"chunks/final_Bm3VOI3I.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_D3tI_-V9.mjs","\u0000@astro-page:src/pages/pago@_@astro":"chunks/pago_Cu7CwfUv.mjs","\u0000@astro-page:src/pages/pedidos@_@astro":"chunks/pedidos_BD1LB0XF.mjs","\u0000@astro-page:src/pages/productos@_@astro":"chunks/productos_Cvdvh808.mjs","\u0000@astro-page:src/pages/registro@_@astro":"chunks/registro_C_kQ6grF.mjs","\u0000@astro-page:src/pages/sobrenosotros@_@astro":"chunks/sobrenosotros_D1KU4Xmm.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C8RsLlNz.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.D9x3RUk0.js","/astro/hoisted.js?q=0":"_astro/hoisted.CyXHj87M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/carro.VOQXacTP.css","/favicon.png","/FerreMaxicon.png","/slider1.png","/slider2.png","/slider3.jpg","/_astro/hoisted.CyXHj87M.js","/_astro/hoisted.D9x3RUk0.js","/productos/cepilladora.jpg","/productos/fresadora.jpg","/productos/kit.jpg","/productos/soldadora.jpg","/productos/taladro.jpg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
