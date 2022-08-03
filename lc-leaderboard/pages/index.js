import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { QuestionMarkCircleIcon, FireIcon, FastForwardIcon, BanIcon, StarIcon, LightningBoltIcon, PlusIcon} from '@heroicons/react/outline'
import { data } from 'autoprefixer';


function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}




export default function Home({leaderboard, array, easies, meds, hards}) {
  array.sort(function(a,b){return a - b})
  array.reverse()


  console.log(meds)

  const ranks = [
    {
      place: "#1",
      name: getKeyByValue(leaderboard, array[0]),
      description:
        'GrindLord',
      count : array[0],
      easies : easies[getKeyByValue(leaderboard, array[0])],
      meds : meds[getKeyByValue(leaderboard, array[0])],
      hards : hards[getKeyByValue(leaderboard, array[0])],
      icon: FireIcon,
    },
    {
      place: "#2",
      name: getKeyByValue(leaderboard, array[1]),
      description:
        'Up and coming',
      count : array[1],
      easies : easies[getKeyByValue(leaderboard, array[1])],
      meds : meds[getKeyByValue(leaderboard, array[1])],
      hards : hards[getKeyByValue(leaderboard, array[1])],
      icon: StarIcon,
    },
    {
      place: "#3",
      name: getKeyByValue(leaderboard, array[2]),
      description:
        'Not Bad',
      count : array[2],
      easies : easies[getKeyByValue(leaderboard, array[2])],
      meds : meds[getKeyByValue(leaderboard, array[2])],
      hards : hards[getKeyByValue(leaderboard, array[2])],
      icon: LightningBoltIcon,
    },
    {
      place: "#4",
      name: getKeyByValue(leaderboard, array[3]),
      description:
        'Almost there',
      count : array[3],
      easies : easies[getKeyByValue(leaderboard, array[3])],
      meds : meds[getKeyByValue(leaderboard, array[3])],
      hards : hards[getKeyByValue(leaderboard, array[3])],
      icon: FastForwardIcon,
    },
    {
      place: "#5",
      name: getKeyByValue(leaderboard, array[4]),
      description:
        'Start Grinding Bro',
      count : array[4],
      easies : easies[getKeyByValue(leaderboard, array[4])],
      meds : meds[getKeyByValue(leaderboard, array[4])],
      hards : hards[getKeyByValue(leaderboard, array[4])],
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#6",
      name: getKeyByValue(leaderboard, array[5]),
      description:
        'Step it up',
      count : array[5],
      easies : easies[getKeyByValue(leaderboard, array[5])],
      meds : meds[getKeyByValue(leaderboard, array[5])],
      hards : hards[getKeyByValue(leaderboard, array[5])],
      icon: QuestionMarkCircleIcon,
    },
    {
      place: "#7",
      name: getKeyByValue(leaderboard, array[6]),
      description:
        'Are you even leetcoding??',
      count : array[6],
      easies : easies[getKeyByValue(leaderboard, array[6])],
      meds : meds[getKeyByValue(leaderboard, array[6])],
      hards : hards[getKeyByValue(leaderboard, array[6])],
      icon: BanIcon,
    }
  ]



  return (
    <div className="bg-slate-900 h-screen">
      <div className="py-10">
        <div className="flex justify-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-500 to-white">
          <h1>
              NU Fintech Leetcode Leaderboard
          </h1>
        </div>
      </div>
      
      {ranks.map((rank) => (
      <div key={ranks.name} className="bg-gradient-to-r from-cyan-600 to-indigo-500 mb-5 mx-24 rounded-md">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-amber-500">
                <rank.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:inline">{rank.place}  {rank.name} </span>
                <span className="md:flex text-amber-500 md:text-center">Total: {rank.count}</span>
                <span className="md:flex text-amber-500 md:text-center">Easy: {rank.easies}</span>
                <span className="md:flex text-amber-500 md:text-center">Medium: {rank.meds}</span>
                <span className="md:flex text-amber-500 md:text-center">Hard: {rank.hards}</span>
                <span className="hidden md:block"> {rank.description} </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <span
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                Rank:
              </span>
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



export async function getStaticProps({}) {
  const client = new ApolloClient({
    uri: 'https://leetcode.com/graphql',
    cache: new InMemoryCache()
  });


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
`] 

let dict = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0};
let arr = []
let easy = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0}
let med = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0}
let hard = {"echavemann" : 0, "jasonlu2025" : 0, "richard-bann" : 0, "davidpark2025" : 0, "aidanvillasenor" : 0, "gushaopengfrank" : 0, "JerayuT" : 0}


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

