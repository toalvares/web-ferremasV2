import { Productos, db } from "astro:db";

export default async function seed() {
  await db.insert(Productos).values([
    {id: 1, name: "SOLDADORA INVERTER DW120 BLACK KRAFTER 120A LHE", price: 10000, brand: "Krafter", image: '/productos/soldadora.jpg'},
    {id: 2, name: "FRESADORA KRAFTER", price: 100, brand: "Krafter", image: '/productos/fresadora.jpg'},
    {id: 3, name: "TALADRO PEDESTAL EINHELL 300W TC-BD 450", price: 100, brand: "EINHELL", image: '/productos/taladro.jpg'},
    {id: 4, name: "KIT TALADRO PERCUTOR + LLAVE ATORNILLADOR IMPACTO BOSCH LHEI", price: 100, brand: "BOSH", image: '/productos/fresadora.jpg'},
    {id: 5, name: "CEPILLO CANTEADOR EINHELL TC-SP 204 1.500 W 900 RPM", price: 100, brand: "EINHELL", image: '/productos/cepilladora.jpg'},
    {id: 6, name: "CEPILLO  EINHELL TC-SP 204 1.500 W 900 RPM", price: 100, brand: "EINHELL", image: '/productos/cepilladora.jpg'},
  ]);
}
