import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/Client";
import UsersListScreen from "./UsersListScreen";

const Stack = createStackNavigator();

const UsersScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 1,
              marginTop: 100,
            }}
          >
            Listado de usuarios
          </Text>
        </View>
        <ApolloProvider client={client}>
          <Stack.Navigator>
            <Stack.Screen name="Listado" component={UsersListScreen} />
          </Stack.Navigator>
        </ApolloProvider>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          By Chidalgo
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UsersScreen;


