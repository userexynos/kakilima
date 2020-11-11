import React, { Component } from "react";
import { Image, Text } from "react-native";
import { Provider } from "react-redux";
import { fromRight, fromBottom } from "react-navigation-transitions";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from "react-navigation";

// store
import Store from "./app/redux/store/index";

// SplashScreen
import SplashScreen from "./app/screen/SplashScreen";

// Auth
import Login from "./app/screen/Auth/Login";
import Register from "./app/screen/Auth/Register";

// Bottom Navigation
import Dashboard from "./app/screen/BottomNav/Dashboard";
import Basket from "./app/screen/BottomNav/Basket";
import Profile from "./app/screen/BottomNav/Profile";
import Transaction from "./app/screen/BottomNav/Transaction";

// Product
import BuyProduct from "./app/screen/Product/Product";
import ProductDetail from "./app/screen/Product/ProductDetail";
import ProductOrder from "./app/screen/Product/ProductOrder";
import ProductPayment from "./app/screen/Product/ProductPayment";
import ProductTransaction from "./app/screen/Product/ProductTransaction";

// Phone Balance
import BuyBalance from "./app/screen/PhoneBalance/BuyBalance";

// Test
import Test from "./app/screen/Test/TestScreen";
import Test2 from "./app/screen/Test/TestScreen2";

const BottomNav = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./app/assets/images/home-inactive.png")}
            style={{ tintColor: tintColor, width: 24, height: 24 }}
          />
        ),
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Nunito-SemiBold",
              color: tintColor,
              marginTop: 8,
            }}
          >
            Beranda
          </Text>
        ),
      },
    },
    Transaction: {
      screen: Transaction,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./app/assets/images/transaction-active.png")}
            style={{ tintColor: tintColor, width: 24, height: 24 }}
          />
        ),
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Nunito-SemiBold",
              color: tintColor,
              marginTop: 8,
            }}
          >
            Transaksi
          </Text>
        ),
      },
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./app/assets/images/keranjang-inactive.png")}
            style={{ tintColor: tintColor, width: 24, height: 24 }}
          />
        ),
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Nunito-SemiBold",
              color: tintColor,
              marginTop: 8,
            }}
          >
            Keranjang
          </Text>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./app/assets/images/profile-inactive.png")}
            style={{ tintColor: tintColor, width: 24, height: 24 }}
          />
        ),
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Nunito-SemiBold",
              color: tintColor,
              marginTop: 8,
            }}
          >
            Profile
          </Text>
        ),
      },
    },
  },
  {
    initialRouteName: "Dashboard",
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#3A9C0B",
      inactiveTintColor: "grey",
      style: {
        height: 60,
        backgroundColor: "white",
      },
      indicatorStyle: {
        backgroundColor: "transparent",
      },
    },
  }
);

// Product

const Product = createStackNavigator(
  {
    BuyProduct,
    ProductDetail,
  },
  {
    initialRouteName: "BuyProduct",
    // transitionConfig: () => fromRight(200),
    headerMode: "none",
  }
);

const PayProduct = createStackNavigator(
  {
    ProductOrder,
    ProductPayment,
  },
  {
    initialRouteName: "ProductOrder",
    // transitionConfig: () => fromRight(200),
    headerMode: "none",
  }
);

// End Product

// Phone Balance

const PhoneBalance = createStackNavigator(
  {
    BuyBalance,
  },
  {
    initialRouteName: "BuyBalance",
    headerMode: "none",
  }
);

// End Phone Balance

const Home = createStackNavigator(
  {
    BottomNav,
    Product,
    PayProduct,
    ProductTransaction,
    PhoneBalance,
  },
  {
    initialRouteName: "BottomNav",
    // transitionConfig: () => fromBottom(200),
    headerMode: "none",
  }
);

const Auth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: "Login",
    // transitionConfig: () => fromRight(200),
    headerMode: "none",
  }
);

const TestScreen = createStackNavigator(
  {
    Test,
    Test2,
  },
  {
    headerMode: "none",
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    SplashScreen,
    Auth,
    Home,
    TestScreen,
  },
  {
    initialRouteName: "SplashScreen",
    transitionConfig: () => fadeIn(200),
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
