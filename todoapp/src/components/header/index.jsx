import { HStack, Text, IconButton } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <HStack justify="space-between" w="100%" px="24px">
      <HStack gap="8px">
        <Text fontSize="18px" fontWeight="600" color="#1A202C">
          Welcome,
        </Text>
        <Text fontSize="18px" fontWeight="500" color="#1A202C">
          {user?.fullName}
        </Text>
      </HStack>
      <IconButton
        isRound={true}
        variant="solid"
        bgColor="#1F2A37"
        color="white"
        colorScheme="red"
        aria-label="logout"
        fontSize="24px"
        icon={<HiOutlineLogout />}
        onClick={handleLogout}
      ></IconButton>
    </HStack>
  );
};

export default Header;
