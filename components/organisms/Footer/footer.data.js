import { FiInstagram, FiTwitter, FiFacebook, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";

export const footerData = [
  {
    title: "Direcciones",
    links: [
      {
        icon: <HiOutlineLocationMarker />,
        link: "/",
        label: "Villaguay, Entre Rios - Argentina",
      },
    ],
  },
  {
    title: "Contactanos",
    links: [
      {
        icon: <FiPhone />,
        link: "/",
        label: "3455-420000",
      },
      {
        icon: <SiWhatsapp />,
        link: "/",
        label: "+54-3455-420000",
      },
    ],
  },
  {
    title: "Legales",
    links: [
      {
        link: "/",
        label: "Terminos de uso y servicio",
      },
      {
        link: "/",
        label: "Politicas de privacidad",
      },
    ],
  },
  {
    title: "Redes sociales",
    links: [
      {
        link: "/",
        icon: <FiInstagram />,
        label: "Instagram",
      },
      {
        icon: <FiTwitter />,
        link: "/",
        label: "Twitter",
      },
      {
        icon: <FiFacebook />,
        link: "/",
        label: "Facebook",
      },
    ],
  },
];
