import { StoryType } from "@/components/Story";

const stories: StoryType[] = [
  {
    id: "1",
    name: "The Lost City",
    description: "A young adventurer stumbles upon a hidden city lost in time.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus. Iste ipsam minima nam velit ratione. Eum aliquam corrupti minus labore magni veniam eos! Itaque quasi adipisci voluptatibus dignissimos ipsam? Quasi quam porro explicabo nihil placeat reprehenderit, laudantium ut temporibus at voluptatum veniam assumenda nulla optio dolor repellat nisi ducimus beatae dolore amet aspernatur! Recusandae modi perspiciatis dolore ut dolor!",
    genre: ["Adventure", "Mystery"],
    coverImage: "/short-story-cover.jpeg",
    views: 1200,
    reviews: [
      {
        id: "1",
        userName: "Aissa",
        stars: 4,
        comment: "Good story",
      },
      {
        id: "2",
        userName: "User99",
        stars: 5,
        comment: "So good bro",
      },
    ],
    isFree: false,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    id: "2",
    name: "Echoes of the Past",
    description:
      "A scientist discovers an ancient artifact that reveals forgotten history.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus. Iste ipsam minima nam velit ratione. Eum aliquam corrupti minus labore magni veniam eos! Itaque quasi adipisci voluptatibus dignissimos ipsam? Quasi quam porro explicabo nihil placeat reprehenderit, laudantium ut temporibus at voluptatum veniam assumenda nulla optio dolor repellat nisi ducimus beatae dolore amet aspernatur! Recusandae modi perspiciatis dolore ut dolor!",
    genre: ["Sci-Fi", "Drama"],
    coverImage: "/short-story-cover.jpeg",
    views: 850,
    reviews: [
      {
        id: "1",
        userName: "User955",
        stars: 2.5,
        comment: "meh chogamoga",
      },
      {
        id: "2",
        userName: "User9410",
        stars: 3.5,
        comment: "Tralalilo tralala",
      },
    ],
    isFree: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    name: "Shadows in the Fog",
    description:
      "A detective unravels a case that leads to a chilling conspiracy.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus. Iste ipsam minima nam velit ratione. Eum aliquam corrupti minus labore magni veniam eos! Itaque quasi adipisci voluptatibus dignissimos ipsam? Quasi quam porro explicabo nihil placeat reprehenderit, laudantium ut temporibus at voluptatum veniam assumenda nulla optio dolor repellat nisi ducimus beatae dolore amet aspernatur! Recusandae modi perspiciatis dolore ut dolor!",
    genre: ["Thriller", "Crime"],
    coverImage: "/short-story-cover.jpeg",
    views: 3100,
    reviews: [
      {
        id: "1",
        userName: "User920",
        stars: 1,
        comment: "very bad",
      },
      {
        id: "2",
        userName: "User250",
        stars: 4.5,
        comment: "I liked it",
      },
    ],
    isFree: false,
    createdAt: new Date("2023-12-05"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "4",
    name: "The Forgotten Realm",
    description:
      "A portal to another world opens, and a young girl is chosen to save it.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus. Iste ipsam minima nam velit ratione. Eum aliquam corrupti minus labore magni veniam eos! Itaque quasi adipisci voluptatibus dignissimos ipsam? Quasi quam porro explicabo nihil placeat reprehenderit, laudantium ut temporibus at voluptatum veniam assumenda nulla optio dolor repellat nisi ducimus beatae dolore amet aspernatur! Recusandae modi perspiciatis dolore ut dolor!",
    genre: ["Fantasy", "Adventure"],
    coverImage: "/short-story-cover.jpeg",
    views: 540,
    reviews: [
      {
        id: "1",
        userName: "User46",
        stars: 4,
        comment: "Good story",
      },
      {
        id: "2",
        userName: "User461",
        stars: 5,
        comment: "So good bro, legend clash royale",
      },
    ],
    isFree: true,
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-07"),
  },
  {
    id: "5",
    name: "Beneath the Waves",
    description:
      "A deep-sea explorer encounters a hidden civilization beneath the ocean.",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus. Iste ipsam minima nam velit ratione. Eum aliquam corrupti minus labore magni veniam eos! Itaque quasi adipisci voluptatibus dignissimos ipsam? Quasi quam porro explicabo nihil placeat reprehenderit, laudantium ut temporibus at voluptatum veniam assumenda nulla optio dolor repellat nisi ducimus beatae dolore amet aspernatur! Recusandae modi perspiciatis dolore ut dolor!",
    genre: ["Sci-Fi", "Adventure"],
    coverImage: "/short-story-cover.jpeg",
    views: 1470,
    reviews: [
      {
        id: "1",
        userName: "User977",
        stars: 5,
        comment: "bombardiro crocodilo",
      },
      {
        id: "2",
        userName: "User477",
        stars: 4.5,
        comment: "hihihiha",
      },
    ],
    isFree: false,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-28"),
  },
];

export { stories };
