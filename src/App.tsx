import "./App.css";
import { Box } from "./components/Context/Box";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { User } from "./components/Context/User";
import personList from "./data/personList.json";
import {
  UserContext,
  UserContextProvider,
} from "./components/Context/UserContext";
import Counter from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import { CustomText } from "./components/polymorphic/Text";

function App() {
  const personName = {
    fName: "MD",
    lName: "Islam",
  };

  return (
    <div className="App">
      <CustomText size="lg" color="primary" as={"p"}>
        hello
      </CustomText>
      <CustomText size="lg" color="primary" htmlFor="hh" as={"label"}>
        hello
      </CustomText>
      <CustomInput
        type={"text"}
        value="123"
        onChange={(event) => console.log(event.target.value)}
      ></CustomInput>
      <CustomButton
        style={{ color: "red", marginTop: "50px" }}
        variant="primary"
        onClick={() => console.log("Button click")}
      >
        Custom Button
      </CustomButton>
      <Toast position="center" />
      <RandomNumber value={11} isPositive />
      <List
        items={["C", "C++", "Python", "JS"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      <Private isLoggedIn={true} component={Profile} />
      <Counter message="Total Number" />
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
    </div>
  );
}

export default App;
