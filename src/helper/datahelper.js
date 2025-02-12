import { Template1, Template2 } from "../Components/Id_Templates/id_templates";
import { ICONS_HELPER } from "./iconhelper";

export const navbarItems = [
  { id: 1, name: "Home", icon: ICONS_HELPER.HOME_ICON, to: "/" },
  { id: 2, name: "Single Id", icon: ICONS_HELPER.SINGLE_ICON, to: "/single" },
  { id: 3, name: "Bulk", icon: ICONS_HELPER.BULK_ICON, to: "/bulk" },
  { id: 4, name: "Templates", icon: ICONS_HELPER.TEMP_ICON, to: "/template" },
  { id: 6, name: "Orders", icon: ICONS_HELPER.ORDER_ICON, to: "/orders" },
];

export const templates = [
  {
    id: "Template 1",
    image: "https://img.freepik.com/premium-vector/professional-modern-office-id-card-design-template_642592-1935.jpg?w=740",
    name: "Template1",
  },
  {
    id: "Template 2",
    image: "https://marketplace.canva.com/EAFVLsq7vjY/1/0/1600w/canva-purple-and-yellow-modern-high-school-id-card-9nD2EygWLxU.jpg",
    name: "Template2",
  },
  {
    id: "Template 3",
    image: "https://marketplace.canva.com/EAFanujoFkY/2/0/1600w/canva-blue-modern-highschool-id-card-vjI1KIbwj8o.jpg",
    name: "Template3",
  },
  {
    id: "Template 4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_dGKJ_NQAg9BTmMxBibSjdXTlYZsWAtWHg&s",
    name: "Template4",
  },
  {
    id: "Template 5",
    image: "https://edit.org/img/blog/pdt-id-cards-templates-edit-online-free-print-design.webp",
    name: "Template5",
  },
  {
    id: "Template 6",
    image: "https://marketplace.canva.com/EAFrIMMzuCw/1/0/1600w/canva-white-and-green-geometric-student-id-card-XDps5jMb-Y8.jpg",
    name: "Template6",
  },
];
