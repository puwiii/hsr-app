import { BiPhone } from "react-icons/bi";

export const administracionData = [
  {
    name: "Barbarich Alejandra Claudia",
    mediaSource: "/images/photos/directora.png",
    description: (
      <strong
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        Directora · <BiPhone /> 03455 - 427072{" "}
      </strong>
    ),
  },
  {
    name: "Rodriguez Siciliano Veronica",
    mediaSource: "/images/photos/secretaria.png",
    description: (
      <strong
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        Secretaria técnica · <BiPhone /> 03455 - 427072{" "}
      </strong>
    ),
  },
  {
    name: "Lifschitz Nieves Lorena",
    mediaSource: "/images/photos/administradora.png",
    description: (
      <strong
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        Administradora · <BiPhone /> 03455 - 423446{" "}
      </strong>
    ),
  },
];
