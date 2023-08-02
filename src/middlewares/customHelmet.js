import helmet from "helmet";

const cspDirectives = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", "unsafe-unline"],
  styleSrc: ["'self'", "fonts.googleapis.com", "unsafe-unline"],
  imgSrc: ["'self'", "unsafe-unline"],
  fontSrc: ["'self'", "fonts.gstatic.com", "unsafe-unline"],
  connectSrc: ["'self'"],
  frameSrc: ["'none'"], // Agregar esta directiva para bloquear el uso de iframes externos
  formAction: ["'self'"], // Agregar esta directiva para permitir solo envíos de formularios al mismo sitio
};

export const helmetSecurity = helmet({
  contentSecurityPolicy: {
    directives: cspDirectives,
  },
  crossOriginEmbedderPolicy: { policy: "credentialless" }, // Cambiar
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
  crossOriginResourcePolicy: { policy: "same-site" },
  originAgentCluster: false,
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin",
  },
  strictTransportSecurity: {
    maxAge: 63072000, // 2 años en segundos
    includeSubDomains: true,
    preload: false,
  },
  xDnsPrefetchControl: { allow: false },
  xFrameOptions: { action: "sameorigin" },
  xPermittedCrossDomainPolicies: {
    permittedPolicies: "none",
    cacheControl: {
      noCache: true,
      noStore: true,
    },
    pragma: "no-cache",
}});
  
  