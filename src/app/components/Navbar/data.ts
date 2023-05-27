export type Menu = {
  type: string;
  name: string;
  icon: string;
  subList: (Menu | [])[];
};

const menuList: Menu[] = [
  {
    type: "Home",
    name: "Home",
    icon: "",
    subList: [],
  },
  {
    type: "dropDownMenu",
    name: "Projects",
    icon: "",
    subList: [
      {
        name: "Blog",
        icon: "",
        subList: [],
        type: "item",
      },
    ],
  },
  {
    type: "item",
    name: "About",
    icon: "",
    subList: [],
  },
  {
    type: "item",
    name: "Contact us",
    icon: "",
    subList: [],
  },
];
export default menuList;
