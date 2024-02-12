import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const add_details = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddess] = useState("");
  const [designation, setDesignation] = useState("");
  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningdate: joiningdate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };
    axios
      .post("http://10.0.2.2:8000/addEmployee", employeeData)
      .then((response) => {
        Alert.alert(
          "Registration Successfull",
          "You have been registered successfully"
        );
        setName("");
        setEmployeeId("");
        setDob("");
        setMobileNo("");
        setSalary("");
        setAddess("");
        setJoiningDate("");
        setDesignation("");
      }).catch((error)=>{
        Alert.alert("Registration failed",
        "An error occured during registration"
        );
        console.log("registration failed",error)
      });
  };
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Full Name (First and Last name)
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            value={employeeId}
            onChangeText={(text) => setEmployeeId(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>
          <TextInput
            value={dob}
            onChangeText={(text) => setDob(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
          <TextInput
            value={joiningdate}
            onChangeText={(text) => setJoiningDate(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            value={address}
            onChangeText={(text) => setAddess(text)}
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
        onPress={handleRegister}
          style={{
            backgroundColor: "#ABCABA",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Add Employee
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default add_details;

const styles = StyleSheet.create({});
