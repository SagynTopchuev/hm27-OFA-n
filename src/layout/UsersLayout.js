import { Outlet } from "@mui/icons-material";
import { useCallback, useState } from "react";
import { Header } from "../components/header/Header";
import { MealSummary } from "../components/meal-summary/MealSummary";
import { Meals } from "../components/meals/Meals";
import { useDispatch, useSelector } from "react-redux";
import { ActionsTypeSnackbar } from "../store/snackbar/snackbar";
import { SnackbarMui } from "../components/UI/snackbar/Snackbar";
import { Basket } from "../components/basket/Basket";

export const UsersLayout = () => {
  const [toggle, setToggle] = useState(false);
  const { open } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar());
  };
  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return (
    <>
      {open && <SnackbarMui onClose={onCloseHandler} />}

      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      <Outlet />
      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}
    </>
  );
};
