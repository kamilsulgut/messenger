interface NavbarItemsInterface {
  title: string;
  link: string;
  blank?: boolean;
  id: number;
}
const navbarItems: NavbarItemsInterface[] = [
  {
    title: "home",
    link: "/home",
    id: 1,
  },
  {
    title: "app",
    link: "/messenger",
    id: 2,
  },
  {
    title: "github",
    link: "https://github.com/kamilsulgut",
    blank: true,
    id: 3,
  },
];

export default navbarItems;
