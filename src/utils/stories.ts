import { StoryType } from "@/components/Story";

export const stories: StoryType[] = [
  {
    id: "1",
    name: "The Lost City",
    description: "A young adventurer stumbles upon a hidden city lost in time.",
    about: [
      "A journey through mystery and adventure awaits in this thrilling tale.",
      "Dive into a world of secrets, unexpected twists, and unforgettable characters.",
    ],
    preview: [
      "Ethan pushed aside the vines covering the stone archway.",
      "The ruins lay before him, lost to time, untouched for centuries.",
    ],
    genre: ["Adventure", "Mystery"],
    coverImage: "/short-story-cover.jpeg",
    views: 1200,
    downloads: 40,
    isFree: true,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    id: "2",
    name: "Echoes of the Past",
    description:
      "A scientist discovers an ancient artifact that reveals forgotten history.",
    about: [
      "A story of courage, love, and the unknown—where every choice matters.",
      "Step into a realm of imagination, where reality blurs with fantasy.",
    ],
    preview: [
      "Dr. Lane wiped the dust off the ancient artifact.",
      "Symbols glowed faintly, whispering echoes of forgotten history.",
    ],
    genre: ["Sci-Fi", "Drama"],
    coverImage: "/short-story-cover.jpeg",
    views: 850,
    downloads: 50,
    isFree: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    name: "Shadows in the Fog",
    description:
      "A detective unravels a case that leads to a chilling conspiracy.",
    about: [
      "An unforgettable tale that will keep you on the edge of your seat.",
      "A gripping narrative filled with suspense, drama, and emotion.",
    ],
    preview: [
      "Detective Carter exhaled, watching the fog swallow the city streets.",
      "A single matchbook lay in his palm—a clue leading to something bigger.",
    ],
    genre: ["Thriller", "Crime"],
    coverImage: "/short-story-cover.jpeg",
    views: 3100,
    downloads: 10,
    isFree: true,
    createdAt: new Date("2023-12-05"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "4",
    name: "The Forgotten Realm",
    description:
      "A portal to another world opens, and a young girl is chosen to save it.",
    about: [
      "Unlock the secrets of a world where nothing is as it seems.",
      "A thrilling ride through darkness and light—what will you uncover?",
    ],
    preview: [
      "Lina felt a strange pull as she approached the glowing portal.",
      "The air shimmered, revealing a world unlike any she had seen.",
    ],
    genre: ["Fantasy", "Adventure"],
    coverImage: "/short-story-cover.jpeg",
    views: 540,
    downloads: 88,
    isFree: true,
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-07"),
  },
  {
    id: "5",
    name: "Beneath the Waves",
    description:
      "A deep-sea explorer encounters a hidden civilization beneath the ocean.",
    about: [],
    preview: [
      "Dylan adjusted his diving gear, descending into the deep blue abyss.",
      "Beneath the waves, something shimmered—a city hidden under the ocean.",
    ],
    genre: ["Sci-Fi", "Adventure"],
    coverImage: "/short-story-cover.jpeg",
    views: 1470,
    downloads: 14,
    isFree: false,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-28"),
  },
];
