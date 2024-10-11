import React, { useState } from "react";
import { Divider, VStack } from "@chakra-ui/react";
import AddTask from "../addTask";
import Filter from "../filter";
import Task from "../task";

const TaskManager = () => {
  const [tasks, setTasks] = useState();
  return (
    <VStack spacing={4} w="100%" h="Calc(100% - 40px)">
      <AddTask />
      <Divider borderColor="#E2E8F0" />
      <Filter />
      <VStack w="100%" h="100%" spacing={4} overflowY="auto">
        <Task task={{ name: "Task 1", isDone: true }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: false }} />
        <Task task={{ name: "Task 1", isDone: true }} />
        <Task task={{ name: "Task 1", isDone: true }} />
        <Task task={{ name: "Task 1", isDone: true }} />
      </VStack>
    </VStack>
  );
};

export default TaskManager;
