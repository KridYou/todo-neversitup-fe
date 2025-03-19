import { Metadata } from "next";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TodoList from "../component/TodoList";
import { mockeData } from "@/mockData/mock-data";
import { fetchTodos } from "../api/mock-api";
import { fetchData } from "../api/api";
import { Todo } from "@/interface/todo.interface";

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple To-Do List.",
  keywords: "Next.js, To-Do List, Krid",
  openGraph: {
    title: "To-Do List",
    description: "A simple To-Do List.",
  },
};

const HomePage = async () => {
  // mock
  const todos: Todo[] = await fetchTodos(mockeData);

  // real api
  // const todos = await fetchData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/todo/all`,
  //   `${process.env.TOKEN}`
  // );

  return (
    <>
      <Navbar />
      <TodoList todos={todos} />
      <Footer />
    </>
  );
};

export default HomePage;
