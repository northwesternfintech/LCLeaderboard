import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Title from './Title/Title'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]

export default function Home({leaderboard, array}) {
  array.sort(function(a,b){return a - b})
  array.reverse()
  console.log(leaderboard)
  console.log("Winner! " + getKeyByValue(leaderboard, array[0]) + " Complete: " + array[0]);
  console.log("Second place! " + getKeyByValue(leaderboard, array[1]));

  let winner = getKeyByValue(leaderboard, array[0]);

  return (
    <div className="bg-slate-900 h-screen">
      <Title /> <br/>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">#1 {winner}</span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Profile
              </a>
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

  for(let i = 0; i<q.length; i++)
  {
    let { data } = await client.query({
      query: q[i]
    });
    dict[data.matchedUser.username] = data.matchedUser.submitStats.acSubmissionNum[0].count;
    arr[i] = data.matchedUser.submitStats.acSubmissionNum[0].count;
  }

 
  

  return {
    props: {
      leaderboard : dict,
      array : arr
    }
  }
}

