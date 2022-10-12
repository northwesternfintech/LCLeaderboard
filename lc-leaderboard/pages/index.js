import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import react from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  ThumbDownIcon,
  QuestionMarkCircleIcon,
  FireIcon,
  FastForwardIcon,
  BanIcon,
  StarIcon,
  LightningBoltIcon,
  MinusIcon,
  TrashIcon,
  UserRemoveIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import { data } from "autoprefixer";

// Link for list of icons: https://unpkg.com/browse/@heroicons/react@1.0.6/outline/

// Main home function
export default function Home({ array, easies, meds, hards, revlead }) {
  array.sort(function (a, b) {
    return a - b;
  });
  array.reverse();

  // Username : Real Name
  const people = {
    echavemann: "Ethan Havemann",
    jasonlu2025: "Jason Lu",
    "richard-bann": "Richard Bann",
    davidpark2025: "David Park",
    aidanvillasenor: "Aidan Villasenor",
    gushaopengfrank: "Frank Gu",
    JerayuT: "Tom Tiamraj",
    dmajcher: "Daniel Majcher",
    Yetermin8: "Yetayal Tizale",
    Amiin5: "Amiin Muse",
    thebarberthief: "Louis Gabison",
    PeterL712: "Peter Lau",
    aromanenko1: "Alex Romanenko",
    LCMarko: "Marko Veljanovski",
    lemat42: "Gary Chen",
    boxable: "Natalie Hill",
    jhan5: "Jerry Han",
    minnce: "Christopher Minn",
    andli06: "Andrew Li",
    jingyangc: "Matthew Chang",
    ElysiaL528: "Elysia Lopez",
    spi2026nu: "Sophia Pi",
    izh_17: "Izzy Huang",
    onecholas: "Nicholas Hsu",
    shahdev212: "Dev Shah",
    arianapineda: "Ariana Pineda",
    belakey: "Blake Hu",
    Astronicus: "Joey Shao",
    hongzhou2025: "Hong Zhou",
    "richard-lam": "Richard Lam",
    jayhoonpark: "Jay Park",
    meenazoks: "Meena Zoks",
    dsl03: "Daniel Lee",
    akashvshroff: "Akash Shroff",
    yenroger2002: "Rogen Yen",
    "10cirenehc": "Eric Chen",
    brennanbenson2025: "Brennan Benson",
    kliu3638: "Kevin Liu",
    Eugeniacao_: "Eugenia Cao",
    tahiragrewal: "Tahira Grewal",
    teapott: "Tommy Pottinger",
    clnaing23: "Chris Naing",
    eel_mas: "Samuel Lee",
    kierthan42: "Kierthan Lathrop",
    williamhe23: "William He",
    jeshuica: "Jessica Guo",
    ICET2003: "IceT T.",
    mitchelllai: "Mitchell Lai",
    grumjug: "Liam Jackson",
    miyayq36: "Miya Liu",
  };

  let separation = Object.entries(revlead);
  let arrayNames = [];
  separation.forEach(([key, value]) => {
    for (let i = 0; i < value.length; i++) {
      arrayNames.push(value[i]);
    }
  });

  arrayNames.reverse();
  console.log(arrayNames);
  console.log(revlead);
  console.log(array);

  let dishonored = "";
  for (let i = 20; i < array.length; i++) {
    dishonored += people[arrayNames[i]] + ", ";
  }
  console.log(dishonored);

  // Dictonary of leaderboard
  const ranks = [
    {
      place: "#1",
      name: arrayNames[0],
      realname: people[arrayNames[0]],
      description: "Grind-lord",
      count: array[0],
      easies: easies[arrayNames[0]],
      meds: meds[arrayNames[0]],
      hards: hards[arrayNames[0]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[0] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[0],
      icon: FireIcon,
    },
    {
      place: "#2",
      name: arrayNames[1],
      realname: people[arrayNames[1]],
      description: "Global-E-Leet",
      count: array[1],
      easies: easies[arrayNames[1]],
      meds: meds[arrayNames[1]],
      hards: hards[arrayNames[1]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[1] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[1],
      icon: StarIcon,
    },
    {
      place: "#3",
      name: arrayNames[2],
      realname: people[arrayNames[2]],
      description: "Third place is the second loser",
      count: array[2],
      easies: easies[arrayNames[2]],
      meds: meds[arrayNames[2]],
      hards: hards[arrayNames[2]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[2] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[2],
      icon: LightningBoltIcon,
    },
    {
      place: "#4",
      name: arrayNames[3],
      realname: people[arrayNames[3]],
      description: "Not bad",
      count: array[3],
      easies: easies[arrayNames[3]],
      meds: meds[arrayNames[3]],
      hards: hards[arrayNames[3]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[3] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[3],
      icon: FastForwardIcon,
    },
    {
      place: "#5",
      name: arrayNames[4],
      realname: people[arrayNames[4]],
      description: "Keep at it",
      count: array[4],
      easies: easies[arrayNames[4]],
      meds: meds[arrayNames[4]],
      hards: hards[arrayNames[4]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[4] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[4],
      icon: TrendingUpIcon,
    },
    {
      place: "#6",
      name: arrayNames[5],
      realname: people[arrayNames[5]],
      description: "Start Grinding Bro",
      count: array[5],
      easies: easies[arrayNames[5]],
      meds: meds[arrayNames[5]],
      hards: hards[arrayNames[5]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[5] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[5],
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#7",
      name: arrayNames[6],
      realname: people[arrayNames[6]],
      description: "Bro c'mon",
      count: array[6],
      easies: easies[arrayNames[6]],
      meds: meds[arrayNames[6]],
      hards: hards[arrayNames[6]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[6] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[6],
      icon: ThumbDownIcon,
    },
    {
      place: "#8",
      name: arrayNames[7],
      realname: people[arrayNames[7]],
      description: "Are you even Leetcoding?",
      count: array[7],
      easies: easies[arrayNames[7]],
      meds: meds[arrayNames[7]],
      hards: hards[arrayNames[7]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[7] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[7],
      icon: UserRemoveIcon,
    },
    {
      place: "#9",
      name: arrayNames[8],
      realname: people[arrayNames[8]],
      description: "Road to retail",
      count: array[8],
      easies: easies[arrayNames[8]],
      meds: meds[arrayNames[8]],
      hards: hards[arrayNames[8]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[8] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[8],
      icon: BanIcon,
    },
    {
      place: "#10",
      name: arrayNames[9],
      realname: people[arrayNames[9]],
      description: "End of the line",
      count: array[9],
      easies: easies[arrayNames[9]],
      meds: meds[arrayNames[9]],
      hards: hards[arrayNames[9]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[9] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[9],
      icon: TrashIcon,
    },
    {
      place: "#11",
      name: arrayNames[10],
      realname: people[arrayNames[10]],
      description: "Even further down the line",
      count: array[10],
      easies: easies[arrayNames[10]],
      meds: meds[arrayNames[10]],
      hards: hards[arrayNames[10]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[10] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[10],
      icon: TrashIcon,
    },
    {
      place: "#12",
      name: arrayNames[11],
      realname: people[arrayNames[11]],
      description: "Wait theres more??",
      count: array[11],
      easies: easies[arrayNames[11]],
      meds: meds[arrayNames[11]],
      hards: hards[arrayNames[11]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[11] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[11],
      icon: TrashIcon,
    },
    {
      place: "#13",
      name: arrayNames[12],
      realname: people[arrayNames[12]],
      description: "How are you down here bro",
      count: array[12],
      easies: easies[arrayNames[12]],
      meds: meds[arrayNames[12]],
      hards: hards[arrayNames[12]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[12] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[12],
      icon: TrashIcon,
    },
    {
      place: "#14",
      name: arrayNames[13],
      realname: people[arrayNames[13]],
      description: "The list goes down this far?",
      count: array[13],
      easies: easies[arrayNames[13]],
      meds: meds[arrayNames[13]],
      hards: hards[arrayNames[13]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[13] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[13],
      icon: TrashIcon,
    },
    {
      place: "#15",
      name: arrayNames[14],
      realname: people[arrayNames[14]],
      description: "Might be tough reaching the top",
      count: array[14],
      easies: easies[arrayNames[14]],
      meds: meds[arrayNames[14]],
      hards: hards[arrayNames[14]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[14] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[14],
      icon: TrashIcon,
    },
    {
      place: "#16",
      name: arrayNames[15],
      realname: people[arrayNames[15]],
      description: "It's a long way down",
      count: array[15],
      easies: easies[arrayNames[15]],
      meds: meds[arrayNames[15]],
      hards: hards[arrayNames[15]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[15] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[15],
      icon: TrashIcon,
    },
    {
      place: "#17",
      name: arrayNames[16],
      realname: people[arrayNames[16]],
      description: "Maybe try a little harder",
      count: array[16],
      easies: easies[arrayNames[16]],
      meds: meds[arrayNames[16]],
      hards: hards[arrayNames[16]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[16] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[16],
      icon: TrashIcon,
    },
    {
      place: "#18",
      name: arrayNames[17],
      realname: people[arrayNames[17]],
      description: "At least you're on the list",
      count: array[17],
      easies: easies[arrayNames[17]],
      meds: meds[arrayNames[17]],
      hards: hards[arrayNames[17]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[17] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[17],
      icon: TrashIcon,
    },
    {
      place: "#19",
      name: arrayNames[18],
      realname: people[arrayNames[18]],
      description: "At least you're not last",
      count: array[18],
      easies: easies[arrayNames[18]],
      meds: meds[arrayNames[18]],
      hards: hards[arrayNames[18]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[18] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[18],
      icon: TrashIcon,
    },
    {
      place: "#20",
      name: arrayNames[19],
      realname: people[arrayNames[19]],
      description: "Borderline",
      count: array[19],
      easies: easies[arrayNames[19]],
      meds: meds[arrayNames[19]],
      hards: hards[arrayNames[19]],
      link:
        "https://leetcode-stats.vercel.app/api?username=" +
        arrayNames[19] +
        "&theme=Dark",
      profile: "https://leetcode.com/" + arrayNames[19],
      icon: TrashIcon,
    },
  ];

  // Returning Front-end
  return (
    <div className="bg-slate-900 h-screen overflow-auto">
      <div className="pt-12 pb-10 shadow-lg shadow-indigo-400 hover:shadow-indigo-500">
        <div className="grid place-items-center align-middle text-center text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-500 to-white">
          <h1>NU Fintech Leetcode Leaderboard</h1>
        </div>
        <button className="grid place-items-center mx-auto mt-5 bg-indigo-500 hover:bg-blue-500 hover:shadow-md hover:shadow-cyan-500 text-white font-normal py-2 px-4 rounded">
          <a href="https://northwesternfintech.github.io">
            Check out NU Fintech!
          </a>
        </button>
        <div className="grid place-items-center align-middle text-center text-xl pt-6 font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">
          <h1>Rank based on Leetcode Ranking</h1>
        </div>
      </div>

      {ranks.map((rank) => (
        <div
          key={rank.name}
          className="hover:shadow-xl hover:shadow-amber-500 bg-gradient-to-r from-cyan-600 to-indigo-500 mb-8 mt-8 sm:mx-14 md:mx-24 rounded-md"
        >
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-amber-500">
                  <rank.icon
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="sm:grid sm:mx-auto md:block text-3xl bold">
                    {rank.place} {rank.realname}{" "}
                  </span>
                  <span className="smd:block hidden text-xl text-yellow-500">
                    {" "}
                    &rdquo;{rank.description}&rdquo;
                  </span>
                  <span className="block smd:hidden text-xl text-yellow-500">
                    {" "}
                    Total: {rank.count}
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto ml-2">
                <span className="hidden xl:flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-blue-500 hover:bg-indigo-500">
                  <a href={rank.profile}>
                    <img id="stats" src={rank.link}></img>
                  </a>
                </span>
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex xl:hidden text-white text-xl font-normal">
                  Total: {rank.count}
                </p>
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex xl:hidden text-emerald-400 text-xl font-normal">
                  Easy: {rank.easies}
                </p>
              </div>
              <div className="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex xl:hidden text-yellow-500 text-xl font-normal">
                  Medium: {rank.meds}
                </p>
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex xl:hidden text-red-400 text-xl font-normal">
                  Hard: {rank.hards}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hover:shadow-xl hover:shadow-amber-500 bg-gradient-to-r from-cyan-600 to-indigo-500 mb-8 mt-8 sm:mx-14 md:mx-24 rounded-md">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-amber-500">
                <MinusIcon
                  className="h-10 w-10 text-white"
                  aria-hidden="true"
                />
              </span>
              <div className="ml-3 font-medium text-white">
                <span className="sm:grid sm:mx-auto md:block text-3xl bold">
                  Dishonorable Mentions
                </span>
                <p className="ml-3 font-light">
                  <span className="hidden sm:grid sm:mx-auto md:block font-medium text-yellow-500 text-xl">
                    {" "}
                    &rdquo;Y&apos;all need to start Leetcoding&rdquo;
                  </span>
                  <span className="sm:grid sm:mx-auto md:block text-white text-xl">
                    {dishonored}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Static Props function to query data on reload
export async function getStaticProps({}) {
  const client = new ApolloClient({
    uri: "https://leetcode.com/graphql",
    cache: new InMemoryCache(),
  });

  // Queries go here
  const q = [
    gql`
      query Profile {
        matchedUser(username: "echavemann") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jasonlu2025") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "davidpark2025") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "aidanvillasenor") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "richard-bann") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "gushaopengfrank") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jerayut") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "dmajcher") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "Yetermin8") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "Amiin5") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "thebarberthief") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "PeterL712") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "aromanenko1") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "LCMarko") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "lemat42") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "boxable") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jhan5") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "minnce") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "andli06") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jingyangc") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "ElysiaL528") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "spi2026nu") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "izh_17") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "onecholas") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "shahdev212") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "arianapineda") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "belakey") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "Astronicus") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "hongzhou2025") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "richard-lam") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jayhoonpark") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "meenazoks") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "dsl03") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "akashvshroff") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "yenroger2002") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "10cirenehc") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "brennanbenson2025") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "kliu3638") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "Eugeniacao_") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "tahiragrewal") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "teapott") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "clnaing23") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "grumjug") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "eel_mas") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "kierthan42") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "williamhe23") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "jeshuica") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "ICET2003") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "mitchelllai") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
    gql`
      query Profile {
        matchedUser(username: "miyayq36") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `,
  ];

  // Dictionaries to store data
  let dict2 = {};
  let arr = [];
  let easy = {
    echavemann: 0,
    jasonlu2025: 0,
    "richard-bann": 0,
    davidpark2025: 0,
    aidanvillasenor: 0,
    gushaopengfrank: 0,
    JerayuT: 0,
    dmajcher: 0,
    Yetermin8: 0,
    Amiin5: 0,
    PeterL712: 0,
    aromanenko1: 0,
    LCMarko: 0,
    lemat42: 0,
    boxable: 0,
    jhan5: 0,
    minnce: 0,
    andli06: 0,
    jingyangc: 0,
    ElysiaL528: 0,
    spi2026nu: 0,
    izh_17: 0,
    onecholas: 0,
    shahdev212: 0,
    arianapineda: 0,
    belakey: 0,
    Astronicus: 0,
    hongzhou2025: 0,
    "richard-lam": 0,
    jayhoonpark: 0,
    meenazoks: 0,
    dsl03: 0,
    akashvshroff: 0,
    yenroger2002: 0,
    "10cirenehc": 0,
    brennanbenson2025: 0,
    kliu3638: 0,
    Eugeniacao_: 0,
    tahiragrewal: 0,
    teapott: 0,
    clnaing23: 0,
    grumjug: 0,
    eel_mas: 0,
    kierthan42: 0,
    williamhe23: 0,
    jeshuica: 0,
    ICET2003: 0,
    mitchelllai: 0,
    miyayq36: 0,
  };
  let med = {
    echavemann: 0,
    jasonlu2025: 0,
    "richard-bann": 0,
    davidpark2025: 0,
    aidanvillasenor: 0,
    gushaopengfrank: 0,
    JerayuT: 0,
    dmajcher: 0,
    Yetermin8: 0,
    Amiin5: 0,
    PeterL712: 0,
    aromanenko1: 0,
    LCMarko: 0,
    lemat42: 0,
    boxable: 0,
    jhan5: 0,
    minnce: 0,
    andli06: 0,
    jingyangc: 0,
    ElysiaL528: 0,
    spi2026nu: 0,
    izh_17: 0,
    onecholas: 0,
    shahdev212: 0,
    arianapineda: 0,
    belakey: 0,
    Astronicus: 0,
    hongzhou2025: 0,
    "richard-lam": 0,
    jayhoonpark: 0,
    meenazoks: 0,
    dsl03: 0,
    akashvshroff: 0,
    yenroger2002: 0,
    "10cirenehc": 0,
    brennanbenson2025: 0,
    kliu3638: 0,
    Eugeniacao_: 0,
    tahiragrewal: 0,
    teapott: 0,
    clnaing23: 0,
    grumjug: 0,
    eel_mas: 0,
    kierthan42: 0,
    williamhe23: 0,
    jeshuica: 0,
    ICET2003: 0,
    mitchelllai: 0,
    miyayq36: 0,
  };
  let hard = {
    echavemann: 0,
    jasonlu2025: 0,
    "richard-bann": 0,
    davidpark2025: 0,
    aidanvillasenor: 0,
    gushaopengfrank: 0,
    JerayuT: 0,
    dmajcher: 0,
    Yetermin8: 0,
    Amiin5: 0,
    thebarberthief: 0,
    PeterL712: 0,
    aromanenko1: 0,
    LCMarko: 0,
    lemat42: 0,
    boxable: 0,
    jhan5: 0,
    minnce: 0,
    andli06: 0,
    jingyangc: 0,
    ElysiaL528: 0,
    spi2026nu: 0,
    izh_17: 0,
    onecholas: 0,
    shahdev212: 0,
    arianapineda: 0,
    belakey: 0,
    Astronicus: 0,
    hongzhou2025: 0,
    "richard-lam": 0,
    jayhoonpark: 0,
    meenazoks: 0,
    dsl03: 0,
    akashvshroff: 0,
    yenroger2002: 0,
    "10cirenehc": 0,
    brennanbenson2025: 0,
    kliu3638: 0,
    Eugeniacao_: 0,
    tahiragrewal: 0,
    teapott: 0,
    clnaing23: 0,
    grumjug: 0,
    eel_mas: 0,
    kierthan42: 0,
    williamhe23: 0,
    jeshuica: 0,
    ICET2003: 0,
    mitchelllai: 0,
    miyayq36: 0,
  };

  // Loop to store data of each query
  for (let i = 0; i < q.length; i++) {
    let { data } = await client.query({
      query: q[i],
    });
    arr[i] = data.matchedUser.submitStats.acSubmissionNum[0].count;
    easy[data.matchedUser.username] =
      data.matchedUser.submitStats.acSubmissionNum[1].count;
    med[data.matchedUser.username] =
      data.matchedUser.submitStats.acSubmissionNum[2].count;
    hard[data.matchedUser.username] =
      data.matchedUser.submitStats.acSubmissionNum[3].count;
    let key = data.matchedUser.submitStats.acSubmissionNum[0].count;
    if (dict2[key] == null) {
      dict2[key] = [];
    }
    dict2[key].push(data.matchedUser.username);
  }

  //returning the dictonaries
  return {
    props: {
      array: arr,
      easies: easy,
      meds: med,
      hards: hard,
      revlead: dict2,
    },
    revalidate: 5,
  };
}
