import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import List from "../components/List";
import AddModal from "../components/AddModal";
import axios from "axios";
import { URL } from "../utils/constants";
import UpdateModal from "../components/updateModal";
const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${URL}/todo`);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${URL}/todo/create`, data, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${URL}/todo/delete`, { id }, config);
      console.log(res);
      alert('Task Deleted')
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodoData = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${URL}/todo/update`, data, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Container className="my-5">
      <div className="text-end">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Todo
        </Button>

        <AddModal
          show={modalShow}
          addTodo={addTodo}
          onHide={() => setModalShow(false)}
        />

        <UpdateModal
          updateTodoData={updateTodoData}
          show={updateModalShow}
          onHide={() => setUpdateModalShow(false)}
        />
      </div>

      <div className="mt-4">
        {todos?.map((todo) => {
          return (
            <List
              key={todo.id}
              deleteTodo={deleteTodo}
            
              {...todo}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
