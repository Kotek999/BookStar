import { 
    IconClover, 
    IconBrokenHeart, 
    IconChange,
    IconFamily,
    IconHome,
    IconMan,
    IconResidence,
    IconNature,
    IconPatriot,
    IconFreedom,
    IconCry,
    IconSacrifice,
    IconSleep,
    IconHeart,
    IconAlone,
    IconCrown,
} 
from "../../common/ThemesIcons/Icons";
import { IconList } from "../../common/ListIcon/ListIcon";

export const dataBooks = [
    {
        id: "83223jd2-6y2e-46c2-aed5-35gee321f8ba",
        titlePT: "Pan Tadeusz",
        authorPT: "Adam Mickiewicz",
        authorTextPT: "Autor:",
        contentPT: "„Litwo! Ojczyzno moja! Ty jesteś jak zdrowie; Ile cię trzeba cenić, ten tylko się dowie; Kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie”.",
        datePT: "28 czerwca 1834",
        themes: [
            {
                iconArkadii: <IconClover />,
                typeArkadii: " Arkadii",

                iconMiłość: <IconBrokenHeart />,
                typeMiłość: " Miłości Nieszczęśliwej",

                iconPrzemiana: <IconChange />,
                typePrzemiana: " Przemiany Wewnętrznej Bohatera",

                iconRodzina: <IconFamily />,
                typeRodzina: " Rodziny",

                iconOjczyzna: <IconHome />,
                typeOjczyzna: " Ojczyzny",

                iconSzlachcic: <IconMan />,
                typeSzlachcic: " Szlachcica",

                iconDworek: <IconResidence />,
                typeDworek: " Dworku",

                iconPrzyroda: <IconNature />,
                typePrzyroda: " Przyrody",

                iconPatriotyzm: <IconPatriot />,
                typePatriotyzm: " Patriotyzmu",
            },
        ],
        mainHeroes: [
            {
                listIconPT: <IconList />,
                namePT: "Pan Tadeusz - Tadeusz Soplica",
                contentPT: "(Syn Jacka Soplicy i bratanek Sędziego)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Ksiądz Robak - Jacek Soplica",
                contentPT: "(Ojciec Tadeusza)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Sędzia",
                contentPT: "(Brat Jacka Soplicy i opiekun Tadeusza)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Zosia",
                contentPT: "(Córka Ewy Horeszko)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Telimena",
                contentPT: "(Opiekunka Zosi, jej daleka krewna)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Hrabia",
                contentPT: "(krewny Horeszków)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Wojski",
                contentPT: "(Długoletni przyjaciel Sopliców)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Podkomorzy",
                contentPT: "(Przyjaciel Sędziego)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Rejent",
                contentPT: "(dobry znajomy Sędziego)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Asesor",
                contentPT: "(Znajomy i częsty gość Sędziego Soplicy)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Gerwazy",
                contentPT: "(Stary klucznik zamku Horeszków)."
            },
            {
                listIconPT:<IconList />,
                namePT: "Protazy",
                contentPT: "(Wierny, stary sługa Sędziego)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Maciej Dobrzyński",
                contentPT: "(Przedstawiciel szlachty zaściankowej)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Jankiel",
                contentPT: "(Stary Żyd, właściciel karczmy)."
            },
            {
                listIconPT: <IconList />,
                namePT: "Stolnik",
                contentPT: "(Przypadkowo ginie z rąk Jacka Soplicy)."
            }
        ]
    }, {
        id: "fej93jnj-5hy2-48d3-a4f8-uew8u8w2sass",
        titleDZIII: "Dziady Cz. III",
        authorDZIII: "Adam Mickiewicz",
        authorTextDZIII: "Autor:",
        contentDZIII: "„Nasz naród jak lawa, Z wierzchu zimna i twarda, sucha i plugawa, Lecz wewnętrznego ognia sto lat nie wyziębi; Plwajmy na tę skorupę i zstąpmy do głębi”.",
        dateDZIII: "1832",
        themes: [
            {
                iconWolność_DZIII: <IconFreedom />,
                typeWolność_DZIII: " Wolności",

                iconCierpienie_DZIII: <IconCry />,
                typeCierpienie_DZIII: " Cierpienia",

                iconPoświęcenie_DZIII: <IconSacrifice />,
                typePoświęcenie_DZIII: " Poświęcenia",

                iconSen_DZIII: <IconSleep />,
                typeSen_DZIII: " Snu",

                iconMiłość_DZIII: <IconHeart />,
                typeMiłość_DZIII: " Miłości",

                iconPatriotyzm_DZIII: <IconPatriot />,
                typePatriotyzm_DZIII: " Patriotyzmu",

                iconSamotność_DZIII: <IconAlone />,
                typeSamotność_DZIII: " Samotności",

                iconWładza_DZIII: <IconCrown />,
                typeWładza_DZIII: " Władzy",
            },
            
        ],
        mainHeroes: [
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Konrad",
                contentDZIII: "(Człowiek o wyjątkowej wrażliwości i bogatym życiu wewnętrznym).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Ksiądz Piotr",
                contentDZIII:  "(Odważny patriota, bernardyn, przenikliwy, pokorny i stanowiczy, pomaga Konradowi podnieść się z upadku).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Senator - Nowosilcow",
                contentDZIII:  "(Samowolny tyran, okrutny i bezlistosny, jest uosobieniem zła).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Anioły",
                contentDZIII:  "(Dobre duchy, które czuwają nad Konradem).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Diabły",
                contentDZIII:  "(Złe duchy, która budzą w duszy Konrada złe myśli o zemście).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Rollison",
                contentDZIII:  "(Student aresztowany za udział w antycarskim spisku).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Rollisonowa",
                contentDZIII:  "(Niewidoma matka studenta, wdowa, nieludzko potraktowanego przez carskich siepaczy).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Piotr Wysocki",
                contentDZIII:  "(Uczestnik przyjęcia w salonie warszawskim, ocenia polski naród jako lawa).",
            },
            {
                listIconDZIII: <IconList />,
                nameDZIII: "Cichowski",
                contentDZIII:  "(Męczennik narodowy, dusza towarzystwa, wesoły).",
            }, 
        ]
    }, {
        id: "93rwefwfw-3da1-ief3-bd96-9efwej8jfjw",
        titleLL: "",
        authorLL: "",
        contentLL: "",
        dateLL: "",
        themes: [
            {
                iconLL: "ikonka xD",
                typeLL: "typ motywu jako tekst"
            },
        ],
        mainHeroes: [
            {
                name: "Filip",
                content: "Syn kogoś..."
            }
        ]
    }, {
        id: "i9wierwpo-udu2-431f-bd56-83u8jwewdas5",
        titleFD: "",
        authorFD: "",
        contentFD: "",
        dateFD: "",
        themes: [
            {
                iconFD: "ikonka xD",
                typeFD: "typ motywu jako tekst"
            },
        ],
        mainHeroes: [
            {
                name: "Filip",
                content: "Syn kogoś..."
            }
        ]
    }, {
        id: "efoef32fw-u892-471f-bd96-deuw89wedu2e",
        titleWS: "",
        authorWS: "",
        contentWS: "",
        dateWS: "",
        themes: [
            {
                iconWS: "ikonka xD",
                typeWS: "typ motywu jako tekst"
            },
        ],
        mainHeroes: [
            {
                name: "Filip",
                content: "Syn kogoś..."
            }
        ]
    }];