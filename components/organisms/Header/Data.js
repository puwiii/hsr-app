import { BiHomeHeart, BiPhoneCall } from "react-icons/bi";
import { RiHospitalLine, RiHeartAddLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";

export const links = [
  {
    href: "/",
    label: "Incio",
    icon: <BiHomeHeart />,
  },
  {
    href: "/servicios",
    label: "Servicios",
    icon: <RiHeartAddLine />,
  },
  {
    href: "/administracion",
    label: "Administración",
    icon: <RiHospitalLine />,
  },
  {
    href: "/planes",
    label: "Planes",
    icon: <FaRegHandshake />,
  },
  {
    href: "/contacto",
    label: "Contacto",
    icon: <BiPhoneCall />,
  },
];
