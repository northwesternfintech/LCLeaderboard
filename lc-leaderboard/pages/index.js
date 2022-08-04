import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { ThumbDownIcon, QuestionMarkCircleIcon, FireIcon, FastForwardIcon, BanIcon, StarIcon, LightningBoltIcon, PlusIcon} from '@heroicons/react/outline'
import { data } from 'autoprefixer';

// Function to find key with value of dictionary
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// Link for list of icons: https://unpkg.com/browse/@heroicons/react@1.0.6/outline/

// Main home function 
export default function Home({leaderboard, array, easies, meds, hards}) {
  array.sort(function(a,b){return a - b})
  array.reverse()

  console.log(array);

  // Username : Real Name
  const people = {"echavemann" : "Ethan Havemann", "jasonlu2025" : "Jason Lu", "richard-bann" : "Richard Bann", "davidpark2025" : "David Park", "aidanvillasenor" : "Aidan Villasenor", "gushaopengfrank" : "Frank Gu", "JerayuT" : "Tom Tiamraj", "dmajcher" : "Daniel Majcher", "Yetermin8" : "Yetayal Tizale"};

  // Dictonary of leaderboard 
  const ranks = [
    {
      place: "#1",
      name: getKeyByValue(leaderboard, array[0]),
      realname: people[getKeyByValue(leaderboard, array[0])],
      description:
        'Grind-lord',
      count : array[0],
      easies : easies[getKeyByValue(leaderboard, array[0])],
      meds : meds[getKeyByValue(leaderboard, array[0])],
      hards : hards[getKeyByValue(leaderboard, array[0])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[0]) + "&theme=Dark",
      icon: FireIcon,
    },
    {
      place: "#2",
      name: getKeyByValue(leaderboard, array[1]),
      realname: people[getKeyByValue(leaderboard, array[1])],
      description:  
        'Global E-Leet',
      count : array[1],
      easies : easies[getKeyByValue(leaderboard, array[1])],
      meds : meds[getKeyByValue(leaderboard, array[1])],
      hards : hards[getKeyByValue(leaderboard, array[1])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[1]) + "&theme=Dark",
      icon: StarIcon,
    },
    {
      place: "#3",
      name: getKeyByValue(leaderboard, array[2]),
      realname: people[getKeyByValue(leaderboard, array[2])],
      description:
        'Not Bad',
      count : array[2],
      easies : easies[getKeyByValue(leaderboard, array[2])],
      meds : meds[getKeyByValue(leaderboard, array[2])],
      hards : hards[getKeyByValue(leaderboard, array[2])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[2]) + "&theme=Dark",
      icon: LightningBoltIcon,
    },
    {
      place: "#4",
      name: getKeyByValue(leaderboard, array[3]),
      realname: people[getKeyByValue(leaderboard, array[3])],
      description:
        'Almost there',
      count : array[3],
      easies : easies[getKeyByValue(leaderboard, array[3])],
      meds : meds[getKeyByValue(leaderboard, array[3])],
      hards : hards[getKeyByValue(leaderboard, array[3])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[3]) + "&theme=Dark",
      icon: FastForwardIcon,
    },
    {
      place: "#5",
      name: getKeyByValue(leaderboard, array[4]),
      realname: people[getKeyByValue(leaderboard, array[4])],
      description:
        'Start Grinding Bro',
      count : array[4],
      easies : easies[getKeyByValue(leaderboard, array[4])],
      meds : meds[getKeyByValue(leaderboard, array[4])],
      hards : hards[getKeyByValue(leaderboard, array[4])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[4]) + "&theme=Dark",
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#6",
      name: getKeyByValue(leaderboard, array[5]),
      realname: people[getKeyByValue(leaderboard, array[5])],
      description:
        'Step it up!',
      count : array[5],
      easies : easies[getKeyByValue(leaderboard, array[5])],
      meds : meds[getKeyByValue(leaderboard, array[5])],
      hards : hards[getKeyByValue(leaderboard, array[5])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[5]) + "&theme=Dark",
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#7",
      name: getKeyByValue(leaderboard, array[6]),
      realname: people[getKeyByValue(leaderboard, array[6])],
      description:
        'Bro, c\'mon',
      count : array[6],
      easies : easies[getKeyByValue(leaderboard, array[6])],
      meds : meds[getKeyByValue(leaderboard, array[6])],
      hards : hards[getKeyByValue(leaderboard, array[6])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[6]) + "&theme=Dark",
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#8",
      name: getKeyByValue(leaderboard, array[7]),
      realname: people[getKeyByValue(leaderboard, array[7])],
      description:
        'Are you even leetcoding??',
      count : array[7],
      easies : easies[getKeyByValue(leaderboard, array[7])],
      meds : meds[getKeyByValue(leaderboard, array[7])],
      hards : hards[getKeyByValue(leaderboard, array[7])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[7]) + "&theme=Dark",
      icon: ThumbDownIcon,
    },
    {
      place: "#9",
      name: getKeyByValue(leaderboard, array[8]),
      realname: people[getKeyByValue(leaderboard, array[8])],
      description:
        'Road to retail',
      count : array[7],
      easies : easies[getKeyByValue(leaderboard, array[8])],
      meds : meds[getKeyByValue(leaderboard, array[8])],
      hards : hards[getKeyByValue(leaderboard, array[8])],
      link: "https://leetcode-stats.vercel.app/api?username=" + getKeyByValue(leaderboard, array[8]) + "&theme=Dark",
      icon: BanIcon,
    }
  ]


 // Returning Front-end
  return (
    <div className="bg-slate-900 h-screen overflow-auto">
      <div className="grid pt-12 pb-10 hover:shadow-lg hover:shadow-indigo-400">
        <div className="content-center justify-center align-middle sm:mx-auto sm:px-auto smd:pl-24 md:pl-0 text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-500 to-white">
          <h1>
              NU Fintech Leetcode Leaderboard
          </h1>
        </div>
        <button className="grid content-center place-items-center mx-auto mt-5 bg-indigo-500 hover:bg-blue-500 hover:shadow-md hover:shadow-cyan-500 text-white font-normal py-2 px-4 rounded">
          <a href="https://northwesternfintech.github.io">Check out NU Fintech!</a>
        </button>
      </div>
      
      {ranks.map((rank) => (
        <div key={rank.name} className="hover:shadow-xl hover:shadow-amber-500 bg-gradient-to-r from-cyan-600 to-indigo-500 mb-8 mt-8 sm:mx-12 md:mx-24 rounded-md">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-amber-500">
                  <rank.icon className="h-10 w-10 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="sm:grid sm:mx-auto md:block text-3xl bold overflow-auto">{rank.place}  {rank.realname} </span>
                  {/* <span className="md:block text-amber-500 justify-center">Total: {rank.count}</span>
                  <span className="md:block text-amber-500 md:text-center">Easy: {rank.easies}</span>
                  <span className="md:block text-amber-500 md:text-center">Medium: {rank.meds}</span>
                  <span className="md:block text-amber-500 md:text-center">Hard: {rank.hards}</span> */}
                  <span className="md:block hidden text-xl text-yellow-500"> &rdquo;{rank.description}&rdquo;</span>
                  <span className="block md:hidden text-xl text-yellow-500"> Total: {rank.count}</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <span
                  className="hidden xl:flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-blue-500 hover:bg-indigo-500">
                  <img id="stats" src={rank.link}></img>
                </span>
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex lg:hidden text-white text-xl font-normal">
                  Total: {rank.count}
                </p>
                <p className="hidden sm:hidden smd:flex md:flex mdl:flex lg:hidden text-emerald-400 text-xl font-normal">
                  Easy: {rank.easies}
                </p>
              </div>
              <div className="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <p className="hidden sm:hidden smd:flex md:flex mdl:flex lg:hidden text-yellow-500 text-xl font-normal">
                    Medium: {rank.meds}
                  </p>
                  <p className="hidden sm:hidden smd:flex md:flex mdl:flex lg:hidden text-red-400 text-xl font-normal">
                    Hard: {rank.hards}
                  </p>
                </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                </button>
                
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}


// Static Props function to query data on reload 
export async function getStaticProps({}) {
  const client = new ApolloClient({
    uri: 'https://leetcode.com/graphql',
    cache: new InMemoryCache()
  });

// Queries go here
const q = [gql`
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
`, gql`
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
`, gql`
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
`, gql`
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
`, gql`
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
`, gql`
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
`, gql`
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
`,gql`
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
`, gql`
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
`] 

// Dictionaries to store data 
let dict = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0, "dmajcher" : 0, "Yetermin8" : 0};
let arr = []
let easy = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0, "dmajcher" : 0, "Yetermin8" : 0}
let med = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0, "dmajcher" : 0, "Yetermin8" : 0}
let hard = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0, "dmajcher" : 0, "Yetermin8" : 0}


  // Loop to store data of each query
  for(let i = 0; i<q.length; i++)
  {
    let { data } = await client.query({
      query: q[i]
    });
    dict[data.matchedUser.username] = data.matchedUser.submitStats.acSubmissionNum[0].count;
    arr[i] = data.matchedUser.submitStats.acSubmissionNum[0].count;
    easy[data.matchedUser.username] = data.matchedUser.submitStats.acSubmissionNum[1].count;
    med[data.matchedUser.username] = data.matchedUser.submitStats.acSubmissionNum[2].count;
    hard[data.matchedUser.username] = data.matchedUser.submitStats.acSubmissionNum[3].count;
  }

  //returning the dictonaries 
  return {
    props: {
      leaderboard : dict,
      array : arr,
      easies : easy,
      meds : med,
      hards : hard
    }
  }
}

