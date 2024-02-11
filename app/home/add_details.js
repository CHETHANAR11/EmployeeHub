import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const add_details = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontsize: 17, fontWeight: "bold" }}>
          Add new Employee
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="India"
          placeholderTextColor={"black"}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>
            Full Name (First and Last name)
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Name"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Employee Id"
            placeholderTextColor={"black"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>Designation</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Designation"
            placeholderTextColor={"black"}
          />
        </View>
        <View>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Mobile Number"
            placeholderTextColor={"black"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Date of Birth"
            placeholderTextColor={"black"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>Joining Date</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Joining Date"
            placeholderTextColor={"black"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Salary"
            placeholderTextColor={"black"}
          />
        </View>
        <View>
          <Text style={{ fontsize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Address"
            placeholderTextColor={"black"}
          />
        </View>
        <Pressable
          style={{
            backgroundColor: "#ABCABA",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default add_details;

const styles = StyleSheet.create({});
