import avatarPT from "../assets/avatarImage_PT.jpeg";
import avatarDZIII from "../assets/avatarImage_DZIII.webp";
import avatarLL from "../assets/avatarImage_LL.webp";
import avatarFD from "../assets/avatarImage_FD.jpeg";
import avatarWS from "../assets/avatarImage_WS.jpeg";
import routes from "../routing/routes";

export const data = {
  title: "Wybierz lekturę jaka Ciebie interesuje:",
  authors: "Powered by BookStar 2022",
  avatar: "Book_Avatar",
};

export const booksData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Pan Tadeusz",
    importantTheme: "Ojczyzna...",
    avatarUrl: avatarPT,
    cardScreen: routes.PanTadeusz,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Dziady Cz. III",
    importantTheme: "Wolność...",
    avatarUrl: avatarDZIII,
    cardScreen: routes.Dziady,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lalka",
    importantTheme: "Praca...",
    avatarUrl: avatarLL,
    cardScreen: routes.Lalka,
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Ferdydurke",
    importantTheme: "Deformacja Świata...",
    avatarUrl: avatarFD,
    cardScreen: routes.Ferdydurke,
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Wesele",
    importantTheme: "Literatura...",
    avatarUrl: avatarWS,
    cardScreen: routes.Wesele,
  },
];
