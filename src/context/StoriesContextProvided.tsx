import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Mitch",
      word1: "Livonia",
      word2: "John",
      word3: "asinine",
      word4: "janitor",
      word5: "9",
      word6: "families first",
    },
    {
      id: 2,
      author: "James",
      word1: "Livonia",
      word2: "Bob",
      word3: "kerfuffle",
      word4: "chef",
      word5: "100",
      word6: "mmm toasty",
    },
  ]);
  const addStory = (story: Story): void => {
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
