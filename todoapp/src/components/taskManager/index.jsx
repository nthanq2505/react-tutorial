import React, { useState, useEffect } from "react";
import { Divider, VStack, Flex, Spinner } from "@chakra-ui/react";
import AddTask from "../addTask";
import Filter from "../filter";
import Task from "../task";
import { StateOfFilterTasks } from "../../utils/constants";
import { useSelector } from "react-redux";
import { fetchTaskAPI, deleteTaskAPI, updateTaskAPI } from "../../apis";

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [filterValue, setFilterValue] = useState(StateOfFilterTasks.ALL)
  const user = useSelector(state => state.user)
  const [isLoadingTask, setIsLoadingTask] = useState(false);


  const getTasks = async () => {
    setIsLoadingTask(true)
    try {
      const resultGetTask = await fetchTaskAPI(user?.token, { isDone: filterValue })
      setTasks(resultGetTask.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingTask(false)
    }
  }

  useEffect(() => {
    if (user?.token) { getTasks() }
  }, [filterValue])

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTaskAPI(user?.token, taskId)
      getTasks()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTask = async (data) => {
    try {
      await updateTaskAPI(user?.token, data)
      getTasks()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <VStack spacing={4} w="100%" h="Calc(100% - 40px)">
      <AddTask getTasks={getTasks} />
      <Divider borderColor="#E2E8F0" />
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {isLoadingTask ? (
        <Flex justifyContent='center' alignItems='center' h='100%'>
          <Spinner color="teal" size='lg' />
        </Flex>
      ) : (
        <VStack spacing={5} w='100%' h='calc(100% - 72px - 60px)' overflowY='auto'>
          {tasks.map(task => (
            <Task key={task._id} task={task} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default TaskManager;
