import { Productos, Usuarios, db } from "astro:db";

export default async function seed() {
  // await db.insert(Productos).values([
  //   {
  //     id: 1,
  //     name: "SOLDADORA INVERTER DW120 BLACK KRAFTER 120A LHE",
  //     price: "10.000",
  //     brand: "Krafter",
  //     description: "Soldadora nazi",
  //     model: "DW120",
  //     amperaje: "120V",
  //     warranty: "1 año",
  //     image: "/productos/soldadora.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "FRESADORA RAKITA DE BANCO 1/2 HP 120V 1 FASE 1.500 RPM",
  //     price: "20.000",
  //     brand: "Krafter",
  //     description: "Soldadora nazi",
  //     model: "Nose",
  //     amperaje: "120V",
  //     warranty: "1 año",
  //     image: "/productos/fresadora.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "TALADRO PEDESTAL EINHELL 300W TC-BD 450",
  //     price: "50.000",
  //     brand: "EINHELL",
  //     description: "Soldadora nazi",
  //     model: "Nose",
  //     amperaje: "120V",
  //     warranty: "1 año",
  //     image: "/productos/taladro.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "KIT TALADRO PERCUTOR + LLAVE ATORNILLADOR IMPACTO BOSCH LHEI",
  //     price: "120.000",
  //     brand: "BOSH",
  //     description: "Soldadora nazi",
  //     model: "Nose",
  //     amperaje: "120V",
  //     warranty: "1 año",
  //     image: "/productos/fresadora.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "CEPILLO CANTEADOR EINHELL TC-SP 204 1.500 W 900 RPM",
  //     price: "100.000",
  //     brand: "EINHELL",
  //     description: "Soldadora nazi",
  //     model: "Nose",
  //     amperaje: "120V",
  //     warranty: "1 año",
  //     image: "/productos/cepilladora.jpg",
  //   },
  // ]);

  await db.insert(Usuarios).values([
    {
      id: 1,
      name: "admin",
      email: "tomasalvares0237@gmail.com",
      password: "admin",
    },
    {
      id: 2,
      name: "Usuario",
      email: "tomasalvares0237@hotmail.com",
      password: "usuario",
    },
  ]);
}
