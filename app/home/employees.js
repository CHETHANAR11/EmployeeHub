import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router =useRouter();

  useEffect(() => {
    const fetchEmployeedata = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeedata();
  }, []);
  console.log(employees);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 40,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />
          {employees.length > 0 && (
            <View>
              <Pressable>
                <AntDesign name="pluscircle" size={24} color="black" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
      <Pressable onPress={()=>router.push("/home/add_details")}>
                <AntDesign name="pluscircle" size={24} color="#0072b1" />
              </Pressable>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
