import { Provider } from "react-redux";
import { UsersLayout } from "./layout/UsersLayout";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UsersLayout />
    </Provider>
  );
};

export default App;
