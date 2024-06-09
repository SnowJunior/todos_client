import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL = "http://localhost:5000/api/todos"

const Todo = () => {
  return (
    <Stack h={"100vh"}>
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
};

export default Todo;
