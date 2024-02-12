import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const markattendance = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const nextDate = moment(currentDate).subrack(1, "days");
    setCurrentDate(nextDate);
  };
  const formatdate = (date) => {
    return date.format("MMMM,D,YYYY");
  };
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeedata = async () => {
      try {
        const response = await axios.get("http://10.0.2.2:8000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeedata();
  }, []);
  const [attendance, setAttendance] = useState([]);
  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/attendance`, {
        params: {
          date: currentDate.format("MMMM,D,YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };
  useEffect(() => {
    fetchAttendance();
  }, [currentDate]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
          }}
        >
          <AntDesign
            onPress={goToPrevDay}
            name="left"
            size={24}
            color="black"
          />
          <Text>{formatdate(currentDate)}</Text>
          <AntDesign
            onPress={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </View>
        <View style={{ marginHorizontal: 12 }}>
          {employees.map((item, index) => (
            <Pressable>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item?.employeeName?.charAt(0)}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
};

export default markattendance;

const styles = StyleSheet.create({});
