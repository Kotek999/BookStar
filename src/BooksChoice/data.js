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
    avatarUrl:
      "https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/9/3/9399906483293.jpg",
    cardScreen: routes.PanTadeusz,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Dziady Cz. III",
    importantTheme: "Wolność...",
    avatarUrl:
      "https://image.ceneostatic.pl/data/products/527516/i-biblioteczka-opracowan-dziady-czesc-iii-adama-mickiewicza.jpg",
    cardScreen: routes.Dziady,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lalka",
    importantTheme: "Praca...",
    avatarUrl:
      "https://img.tantis.pl/image/bd4150f0-f46d-492a-a5b4-71009e0d48b1/550x400/webp",
    cardScreen: routes.Lalka,
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Ferdydurke",
    importantTheme: "Deformacja Świata...",
    avatarUrl:
      "https://pim.eduksiazka.pl/media/catalog/product/9/7/9788308070536.jpg",
    cardScreen: routes.Ferdydurke,
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Wesele",
    importantTheme: "Literatura...",
    avatarUrl:
      "https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/3/7/3799906504837.jpg",
    cardScreen: routes.Wesele,
  },
];
