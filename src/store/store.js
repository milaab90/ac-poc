import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selections: [],
        cards: [
            {
                "id": 155,
                "file-name": "flg00",
                "name": {
                  "name-USen": "Lily",
                  "name-EUen": "Lily",
                  "name-EUde": "Liliane",
                  "name-EUes": "Lili",
                  "name-USes": "Lili",
                  "name-EUfr": "Raina",
                  "name-USfr": "Raina",
                  "name-EUit": "Gigliola",
                  "name-EUnl": "Lily",
                  "name-CNzh": "雷妮",
                  "name-TWzh": "雷妮",
                  "name-JPja": "レイニー",
                  "name-KRko": "레이니",
                  "name-EUru": "Лили"
                },
                "personality": "Normal",
                "birthday-string": "February 4th",
                "birthday": "4/2",
                "species": "Frog",
                "gender": "Female",
                "subtype": "B",
                "hobby": "Education",
                "catch-phrase": "toady",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/155",
                "image_uri": "https://acnhapi.com/v1/images/villagers/155",
                "bubble-color": "#00d1bd",
                "text-color": "#fffce9",
                "saying": "Don't jump to conclusions!",
                "catch-translations": {
                  "catch-USen": "toady",
                  "catch-EUen": "toady",
                  "catch-EUde": "kröti",
                  "catch-EUes": "mosquita",
                  "catch-USes": "riiibit",
                  "catch-EUfr": "watich'",
                  "catch-USfr": "zzrrbbitt",
                  "catch-EUit": "gragragra",
                  "catch-EUnl": "padje",
                  "catch-CNzh": "雨雨",
                  "catch-TWzh": "雨雨",
                  "catch-JPja": "でちゅ",
                  "catch-KRko": "그래요",
                  "catch-EUru": "ква"
                }
            },
            {
                "id": 191,
                "file-name": "ham01",
                "name": {
                  "name-USen": "Apple",
                  "name-EUen": "Apple",
                  "name-EUde": "Jessi",
                  "name-EUes": "Rosi",
                  "name-USes": "Rosi",
                  "name-EUfr": "Esther",
                  "name-USfr": "Esther",
                  "name-EUit": "Cicci",
                  "name-EUnl": "Apple",
                  "name-CNzh": "苹果",
                  "name-TWzh": "蘋果",
                  "name-JPja": "アップル",
                  "name-KRko": "애플",
                  "name-EUru": "Эпл"
                },
                "personality": "Peppy",
                "birthday-string": "September 24th",
                "birthday": "24/9",
                "species": "Hamster",
                "gender": "Female",
                "subtype": "A",
                "hobby": "Play",
                "catch-phrase": "cheekers",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/191",
                "image_uri": "https://acnhapi.com/v1/images/villagers/191",
                "bubble-color": "#ff6183",
                "text-color": "#fffce9",
                "saying": "One rotten apple spoils the barrel.",
                "catch-translations": {
                  "catch-USen": "cheekers",
                  "catch-EUen": "cheekers",
                  "catch-EUde": "fiep",
                  "catch-EUes": "do-re-mi",
                  "catch-USes": "do-re-mi",
                  "catch-EUfr": "bibille",
                  "catch-USfr": "bibille",
                  "catch-EUit": "triplo uau",
                  "catch-EUnl": "wangetjes",
                  "catch-CNzh": "转转",
                  "catch-TWzh": "轉轉",
                  "catch-JPja": "キュルン",
                  "catch-KRko": "큐룽",
                  "catch-EUru": "щечки"
                }
            },
            {
                "id": 221,
                "file-name": "kal01",
                "name": {
                  "name-USen": "Alice",
                  "name-EUen": "Alice",
                  "name-EUde": "Konny",
                  "name-EUes": "Zelanda",
                  "name-USes": "Zelanda",
                  "name-EUfr": "Alice",
                  "name-USfr": "Alice",
                  "name-EUit": "Alice",
                  "name-EUnl": "Alice",
                  "name-CNzh": "莫儿",
                  "name-TWzh": "莫兒",
                  "name-JPja": "メルボルン",
                  "name-KRko": "멜버른",
                  "name-EUru": "Алиса"
                },
                "personality": "Normal",
                "birthday-string": "August 19th",
                "birthday": "19/8",
                "species": "Koala",
                "gender": "Female",
                "subtype": "B",
                "hobby": "Education",
                "catch-phrase": "guvnor",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/221",
                "image_uri": "https://acnhapi.com/v1/images/villagers/221",
                "bubble-color": "#e8b010",
                "text-color": "#fffce9",
                "saying": "Treat others as you would like to be treated.",
                "catch-translations": {
                  "catch-USen": "guvnor",
                  "catch-EUen": "guvnor",
                  "catch-EUde": "schnarchhh",
                  "catch-EUes": "tú",
                  "catch-USes": "eucaliup",
                  "catch-EUfr": "chef",
                  "catch-USfr": "chef",
                  "catch-EUit": "tesorino",
                  "catch-EUnl": "chef",
                  "catch-CNzh": "晶亮",
                  "catch-TWzh": "晶亮",
                  "catch-JPja": "キラリ",
                  "catch-KRko": "반짝",
                  "catch-EUru": "лидер"
                }
            },
            {
                "id": 108,
                "file-name": "der07",
                "name": {
                  "name-USen": "Beau",
                  "name-EUen": "Beau",
                  "name-EUde": "Martin",
                  "name-EUes": "Lope",
                  "name-USes": "Lope",
                  "name-EUfr": "Stefaon",
                  "name-USfr": "Stefaon",
                  "name-EUit": "Gigi",
                  "name-EUnl": "Beau",
                  "name-CNzh": "彼得",
                  "name-TWzh": "彼得",
                  "name-JPja": "ペーター",
                  "name-KRko": "피터",
                  "name-EUru": "Бью"
                },
                "personality": "Lazy",
                "birthday-string": "April 5th",
                "birthday": "5/4",
                "species": "Deer",
                "gender": "Male",
                "subtype": "A",
                "hobby": "Nature",
                "catch-phrase": "saltlick",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/108",
                "image_uri": "https://acnhapi.com/v1/images/villagers/108",
                "bubble-color": "#ff791f",
                "text-color": "#fff2bb",
                "saying": "You snooze, you lose.",
                "catch-translations": {
                  "catch-USen": "saltlick",
                  "catch-EUen": "saltlick",
                  "catch-EUde": "knospel",
                  "catch-EUes": "babum",
                  "catch-USes": "babum",
                  "catch-EUfr": "feufeuille",
                  "catch-USfr": "feufeuille",
                  "catch-EUit": "gnam gnam",
                  "catch-EUnl": "zoutsteen",
                  "catch-CNzh": "怎么办",
                  "catch-TWzh": "怎麼辦",
                  "catch-JPja": "おろおろ",
                  "catch-KRko": "우왕",
                  "catch-EUru": "соль-соль"
                }
              },
              {
                "id": 317,
                "file-name": "rbt00",
                "name": {
                  "name-USen": "Bunnie",
                  "name-EUen": "Bunnie",
                  "name-EUde": "Mimmi",
                  "name-EUes": "Coni",
                  "name-USes": "Coni",
                  "name-EUfr": "Clara",
                  "name-USfr": "Clara",
                  "name-EUit": "Bonny",
                  "name-EUnl": "Bunnie",
                  "name-CNzh": "莉莉安",
                  "name-TWzh": "莉莉安",
                  "name-JPja": "リリアン",
                  "name-KRko": "릴리안",
                  "name-EUru": "Банни"
                },
                "personality": "Peppy",
                "birthday-string": "May 9th",
                "birthday": "9/5",
                "species": "Rabbit",
                "gender": "Female",
                "subtype": "B",
                "hobby": "Fashion",
                "catch-phrase": "tee-hee",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/317",
                "image_uri": "https://acnhapi.com/v1/images/villagers/317",
                "bubble-color": "#ff791f",
                "text-color": "#fff2bb",
                "saying": "Hare today, gone tomorrow.",
                "catch-translations": {
                  "catch-USen": "tee-hee",
                  "catch-EUen": "tee-hee",
                  "catch-EUde": "tiihii",
                  "catch-EUes": "oy-oy-oy",
                  "catch-USes": "oy-oy-oy",
                  "catch-EUfr": "hé hé hé",
                  "catch-USfr": "hé hé hé",
                  "catch-EUit": "tiptap",
                  "catch-EUnl": "hihi",
                  "catch-CNzh": "好像喔",
                  "catch-TWzh": "好像喔",
                  "catch-JPja": "みたいな",
                  "catch-KRko": "그렇지뭐",
                  "catch-EUru": "хи-хи"
                }
            },
            {
                "id": 22,
                "file-name": "bea15",
                "name": {
                  "name-USen": "Megan",
                  "name-EUen": "Megan",
                  "name-EUde": "Dagmar",
                  "name-EUes": "Carmela",
                  "name-USes": "Carmela",
                  "name-EUfr": "Candy",
                  "name-USfr": "Candy",
                  "name-EUit": "Dolcinia",
                  "name-EUnl": "Megan",
                  "name-CNzh": "糖果",
                  "name-TWzh": "糖果",
                  "name-JPja": "キャンディ",
                  "name-KRko": "캔디",
                  "name-EUru": "Меган"
                },
                "personality": "Normal",
                "birthday-string": "March 13th",
                "birthday": "13/3",
                "species": "Bear",
                "gender": "Female",
                "subtype": "A",
                "hobby": "Nature",
                "catch-phrase": "sundae",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/22",
                "image_uri": "https://acnhapi.com/v1/images/villagers/22",
                "bubble-color": "#ec7efc",
                "text-color": "#fffce9",
                "saying": "Take a page out of someone else's book, if it's a good book.",
                "catch-translations": {
                  "catch-USen": "sundae",
                  "catch-EUen": "sundae",
                  "catch-EUde": "lollipop",
                  "catch-EUes": "tutifruti",
                  "catch-USes": "tutifruti",
                  "catch-EUfr": "berlingot",
                  "catch-USfr": "berlingot",
                  "catch-EUit": "sucré",
                  "catch-EUnl": "lolly",
                  "catch-CNzh": "舔舔",
                  "catch-TWzh": "舔舔",
                  "catch-JPja": "ぺろ",
                  "catch-KRko": "낼름",
                  "catch-EUru": "сладенько"
                }
            },
            {
                "id": 222,
                "file-name": "kal02",
                "name": {
                  "name-USen": "Melba",
                  "name-EUen": "Melba",
                  "name-EUde": "Kornelia",
                  "name-EUes": "Melba",
                  "name-USes": "Melba",
                  "name-EUfr": "Melba",
                  "name-USfr": "Melba",
                  "name-EUit": "Melba",
                  "name-EUnl": "Melba",
                  "name-CNzh": "阿得",
                  "name-TWzh": "阿得",
                  "name-JPja": "アデレード",
                  "name-KRko": "아델레이드",
                  "name-EUru": "Мельба"
                },
                "personality": "Normal",
                "birthday-string": "April 12th",
                "birthday": "12/4",
                "species": "Koala",
                "gender": "Female",
                "subtype": "B",
                "hobby": "Education",
                "catch-phrase": "toasty",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/222",
                "image_uri": "https://acnhapi.com/v1/images/villagers/222",
                "bubble-color": "#e4b887",
                "text-color": "#fffce9",
                "saying": "A friend who shares is a friend who cares.",
                "catch-translations": {
                  "catch-USen": "toasty",
                  "catch-EUen": "toasty",
                  "catch-EUde": "zubba",
                  "catch-EUes": "tesoro",
                  "catch-USes": "pichú",
                  "catch-EUfr": "pêchou",
                  "catch-USfr": "pêchou",
                  "catch-EUit": "toasty",
                  "catch-EUnl": "toastje",
                  "catch-CNzh": "不得了",
                  "catch-TWzh": "不得了",
                  "catch-JPja": "とっても",
                  "catch-KRko": "정말로요",
                  "catch-EUru": "хрустяшка"
                }
            },
            {
                "id": 290,
                "file-name": "pgn01",
                "name": {
                  "name-USen": "Roald",
                  "name-EUen": "Roald",
                  "name-EUde": "Roland",
                  "name-EUes": "Bobi",
                  "name-USes": "Bobi",
                  "name-EUfr": "Reynald",
                  "name-USfr": "Reynald",
                  "name-EUit": "Angelino",
                  "name-EUnl": "Roald",
                  "name-CNzh": "企鹅达",
                  "name-TWzh": "企鵝達",
                  "name-JPja": "ペンタ",
                  "name-KRko": "펭수",
                  "name-EUru": "Роальд"
                },
                "personality": "Jock",
                "birthday-string": "January 5th",
                "birthday": "5/1",
                "species": "Penguin",
                "gender": "Male",
                "subtype": "B",
                "hobby": "Fitness",
                "catch-phrase": "b-b-buddy",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/290",
                "image_uri": "https://acnhapi.com/v1/images/villagers/290",
                "bubble-color": "#194c89",
                "text-color": "#fffad4",
                "saying": "You must learn to waddle before you can swim.",
                "catch-translations": {
                  "catch-USen": "b-b-buddy",
                  "catch-EUen": "b-b-buddy",
                  "catch-EUde": "k-k-kumpel",
                  "catch-EUes": "titirito",
                  "catch-USes": "titirito",
                  "catch-EUfr": "pépépère",
                  "catch-USfr": "pépépère",
                  "catch-EUit": "br-br-brr",
                  "catch-EUnl": "m-m-maatje",
                  "catch-CNzh": "企鹅",
                  "catch-TWzh": "企鵝",
                  "catch-JPja": "だペン",
                  "catch-KRko": "팽팽",
                  "catch-EUru": "д-дружище"
                }
            },
            {
                "id": 44,
                "file-name": "cat02",
                "name": {
                  "name-USen": "Rosie",
                  "name-EUen": "Rosie",
                  "name-EUde": "Sophie",
                  "name-EUes": "Minina",
                  "name-USes": "Minina",
                  "name-EUfr": "Rosie",
                  "name-USfr": "Rosie",
                  "name-EUit": "Grinfia",
                  "name-EUnl": "Rosie",
                  "name-CNzh": "彭花",
                  "name-TWzh": "彭花",
                  "name-JPja": "ブーケ",
                  "name-KRko": "부케",
                  "name-EUru": "Рози"
                },
                "personality": "Peppy",
                "birthday-string": "February 27th",
                "birthday": "27/2",
                "species": "Cat",
                "gender": "Female",
                "subtype": "A",
                "hobby": "Music",
                "catch-phrase": "silly",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/44",
                "image_uri": "https://acnhapi.com/v1/images/villagers/44",
                "bubble-color": "#7fa9ff",
                "text-color": "#fffce9",
                "saying": "One good purr deserves another.",
                "catch-translations": {
                  "catch-USen": "silly",
                  "catch-EUen": "silly",
                  "catch-EUde": "flöt",
                  "catch-EUes": "miaaau",
                  "catch-USes": "miaaau",
                  "catch-EUfr": "flûte",
                  "catch-USfr": "flûte",
                  "catch-EUit": "tontolon",
                  "catch-EUnl": "gekkie",
                  "catch-CNzh": "看看",
                  "catch-TWzh": "看看",
                  "catch-JPja": "チェキ",
                  "catch-KRko": "헤이",
                  "catch-EUru": "рыбка"
                }
            },
            {
                "id": 111,
                "file-name": "dog00",
                "name": {
                  "name-USen": "Goldie",
                  "name-EUen": "Goldie",
                  "name-EUde": "Bienchen",
                  "name-EUes": "Tere",
                  "name-USes": "Tere",
                  "name-EUfr": "Mirza",
                  "name-USfr": "Mirza",
                  "name-EUit": "Dora",
                  "name-EUnl": "Goldie",
                  "name-CNzh": "牛奶糖",
                  "name-TWzh": "牛奶糖",
                  "name-JPja": "キャラメル",
                  "name-KRko": "카라멜",
                  "name-EUru": "Голди"
                },
                "personality": "Normal",
                "birthday-string": "December 27th",
                "birthday": "27/12",
                "species": "Dog",
                "gender": "Female",
                "subtype": "B",
                "hobby": "Nature",
                "catch-phrase": "woof",
                "icon_uri": "https://acnhapi.com/v1/icons/villagers/111",
                "image_uri": "https://acnhapi.com/v1/images/villagers/111",
                "bubble-color": "#fff98f",
                "text-color": "#879b96",
                "saying": "A little bit of happiness is better than a lot of anguish.",
                "catch-translations": {
                  "catch-USen": "woof",
                  "catch-EUen": "woof",
                  "catch-EUde": "wuff",
                  "catch-EUes": "guau-guau",
                  "catch-USes": "guau-guau",
                  "catch-EUfr": "ouaf",
                  "catch-USfr": "ouaf",
                  "catch-EUit": "wuf wuf",
                  "catch-EUnl": "woef",
                  "catch-CNzh": "汪",
                  "catch-TWzh": "汪",
                  "catch-JPja": "ワン",
                  "catch-KRko": "왈왈",
                  "catch-EUru": "тяв"
                }
            }

        ]
    },
    getters,
    mutations,
    actions
});