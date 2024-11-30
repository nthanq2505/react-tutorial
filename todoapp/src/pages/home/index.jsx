import React, { useEffect } from "react";
import { Box, VStack } from "@chakra-ui/react";
import Header from "../../components/header/index";
import TaskManager from "../../components/taskManager";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      if (isAuthenticated) {
        dispatch(logout());
      }
      navigate("/login");
    } else {
      if (!isAuthenticated) navigate("/login");
    }
  }, [token, dispatch, navigate, isAuthenticated]);
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        w="960px"
        h="85%"
        bgColor="white"
        borderRadius="24px"
        px="60px"
        py="40px"
        gap="20px"
      >
        <Header />
        <TaskManager />
      </VStack>
    </Box>
  );
};

export default Home;
