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
  for (let i = 10; i < array.length; i++) {
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
      icon: FastForwardIcon,
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
      icon: QuestionMarkCircleIcon,
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
      icon: ThumbDownIcon,
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
      icon: ThumbDownIcon,
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
      icon: BanIcon,
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
          <h1>Rank based on # of questions completed</h1>
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
              <div className="ml-3 font-medium text-white truncate">
                <span className="sm:grid sm:mx-auto md:block text-3xl bold">
                  Dishonorable Mentions
                </span>
                <p className="ml-3 font-light truncate">
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
    LCMarko:0,
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
    LCMarko:0 ,
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
    revalidate: 10,
  };
}
