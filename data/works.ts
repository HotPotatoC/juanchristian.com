type PastelColors =
  | 'white-pastel'
  | 'pink-pastel'
  | 'yellow-pastel'
  | 'cyan-pastel'
  | 'green-pastel'
  | 'red-pastel'
  | 'orange-pastel'
export type Work = {
  path: string
  description: string
  image: string
  name: string
  venue: string
  tools: string[]
  year: number
  role?: string
  color:
    | 'white-pastel'
    | 'pink-pastel'
    | 'yellow-pastel'
    | 'cyan-pastel'
    | 'green-pastel'
    | 'red-pastel'
    | 'orange-pastel'
  bgColor: `bg-${PastelColors}`
}

const works: Work[] = [
  {
    name: 'Lexo',
    venue: 'Imagine Cup',
    tools: ['Azure OCR', 'Azure Functions', 'Go', 'React Native', 'PostgreSQL'],
    path: '/works/lexo',
    description:
      'Bionic reading camera for dyslexic people using computer vision',
    image: '/images/lexo.png',
    year: 2022,
    color: 'white-pastel',
    bgColor: 'bg-white-pastel',
  },
  {
    name: 'Stashable',
    venue: 'GEMASTIK Competition',
    tools: ['Go', 'React Native', 'PostgreSQL'],
    path: '/works/stashable',
    description:
      'Platform for users to reserve a place to store their goods in the warehouse',
    image: '/images/stashable.png',
    year: 2022,
    color: 'red-pastel',
    bgColor: 'bg-red-pastel',
  },
  {
    name: 'Twitter Clone',
    venue: 'Personal Project',
    tools: [
      'Microservices',
      'Go',
      'NextJS',
      'gRPC',
      'Consul',
      'Firebase',
      'PostgreSQL',
      'Docker',
    ],
    path: 'https://github.com/twitter-remake',
    description: 'An attempt to recreate the top social network app',
    image: '/images/twitterclone.jpg',
    year: 2023,
    color: 'cyan-pastel',
    bgColor: 'bg-cyan-pastel',
  },
  {
    name: 'TUNEMA',
    venue: 'University Project',
    tools: ['AWS Lambda, RDS, S3', 'Go', 'ReactJS'],
    path: '/works/tunema',
    description:
      'Ecommerce platform that is designed to provide music producers with an exciting new way to discover fresh and original sounds.',
    image: '/images/tunema.png',
    year: 2023,
    color: 'green-pastel',
    bgColor: 'bg-green-pastel',
  },
  {
    name: 'Mindzzle',
    venue: 'Mindzzle',
    tools: ['VueJS', 'TailwindCSS'],
    role: 'Frontend Intern',
    path: '/works/mindzzle',
    description: 'Developing integrated Human Capital Management Platform',
    image: '/images/mindzzlemockup.jpg',
    year: 2018,
    color: 'orange-pastel',
    bgColor: 'bg-orange-pastel',
  },
  {
    name: 'Piggybank',
    venue: 'Technoscape Hackathon',
    tools: ['Go', 'NextJS', 'TailwindCSS', 'PostgreSQL'],
    path: '/works/piggybank',
    description:
      'Piggybank is a kid bank that can help teach saving and financial literacy from an early age to children',
    image: '/images/piggybank.png',
    year: 2023,
    color: 'pink-pastel',
    bgColor: 'bg-pink-pastel',
  },
  {
    name: 'kvstore',
    venue: 'Personal Project',
    tools: ['Go', 'Redis Protocol', 'TCP'],
    path: 'https://github.com/HotPotatoC/kvstore',
    description: 'A redis protocol compatible key-value database written in Go',
    image: '/images/kvstore.gif',
    year: 2022,
    color: 'yellow-pastel',
    bgColor: 'bg-yellow-pastel',
  },
  {
    name: 'Sture',
    venue: 'Open Source Library',
    tools: ['Go', 'Generics', 'Data Structures'],
    path: 'https://github.com/HotPotatoC/sture',
    description: 'A Go data structures library that supports generics',
    image: 'https://opengraph.githubassets.com/a/HotPotatoC/sture',
    year: 2022,
    color: 'pink-pastel',
    bgColor: 'bg-pink-pastel',
  },
  {
    name: 'Snowflake',
    venue: 'Open Source Library',
    tools: ['Go', 'Bit Manipulation'],
    path: 'https://github.com/HotPotatoC/snowflake',
    description: "Twitter's snowflake ID format generator written in Go",
    image: 'https://opengraph.githubassets.com/a/HotPotatoC/snowflake',
    year: 2022,
    color: 'cyan-pastel',
    bgColor: 'bg-cyan-pastel',
  },
  {
    name: '2D Raycasting HTML+JS',
    venue: 'Personal Project',
    tools: ['HTML5 Canvas', 'JavaScript'],
    path: 'https://github.com/HotPotatoC/2D-RayCasting',
    description: 'A simple 2D Raycasting engine made with HTML5 Canvas + JS',
    image: '/images/2d-raycast.png',
    year: 2022,
    color: 'white-pastel',
    bgColor: 'bg-white-pastel',
  },
]

export default works
