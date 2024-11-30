import { HStack, Checkbox, Button, Text, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Task = (props) => {
  const { task, handleDeleteTask, handleUpdateTask } = props;
  const [isEditing, setIsEditing] = useState(false)
  const {
    handleSubmit,
    register,
    setValue,
    setFocus,
    setError,
    formState: { errors, isSubmitting }
  } = useForm()

  useEffect(() => {
    setValue('taskName', task?.name)
  }, [])

  const handleClickEditTask = (event) => {
    event.preventDefault()
    setIsEditing(true)
    setFocus('taskName')
  }

  async function onSubmit(values) {
    if (values.taskName.trim().length === 0) {
      return setError('taskName', {
        type: 'manual',
        message: 'This field can not be empty'
      })
    }
    setIsEditing(!isEditing)
    await handleUpdateTask({ ...task, name: values?.taskName.trim() })
  }

  const handleCancelEditTask = () => {
    setIsEditing(!isEditing)
    setValue("taskName", task.name)
  }

  async function handleClickTaskStatus() {
    await handleUpdateTask({ ...task, isDone: !task.isDone })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <HStack h={16} px={6} py={5} w='100%' justifyContent='space-between' bgColor='#F9FAFB' borderRadius={12} border={isEditing ? '1px solid teal' : 'none'}>
        <HStack alignItems='center' spacing={4} w='100%'>
          <Checkbox size='lg' spacing={6} colorScheme="teal" isDisabled={isEditing} isChecked={task.isDone} onChange={handleClickTaskStatus} />
          <FormControl isInvalid={errors.taskName} h='100%' flex='1' style={{ transform: 'translateY(-12px)' }}>
            <Input
              variant="unstyled"
              isDisabled={isSubmitting}
              isReadOnly={!isEditing}
              h='100%'
              style={{ textDecoration: task.isDone ? 'line-through' : 'none', fontSize: '14px' }}
              color={task.isDone ? 'gray.500' : '#1F2A37'}
              {...register('taskName', {
              required: 'This field can not be empty'
            })}
          />
          <FormErrorMessage>
              {errors.taskName && errors.taskName.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>
      {isEditing ?
        <HStack spacing={4} h={8}>
          <Button colorScheme='teal' variant='solid' size='sm' type="submit" isLoading={isSubmitting}>Save</Button>
          <Button colorScheme='red' variant='solid' size='sm' onClick={handleCancelEditTask} >Cancel</Button>
        </HStack> :
        <HStack spacing={4} h={8}>
          <Button colorScheme='teal' variant='outline' color={task.isDone ? 'gray' : 'teal'} isDisabled={task.isDone} size='sm' onClick={handleClickEditTask}>Edit</Button>
          <Button colorScheme='red' variant='outline' color='red' size='sm' onClick={() => { handleDeleteTask(task?._id) }} >Delete</Button>
        </HStack>}
    </HStack>
  </form>
  );
};

export default Task;
