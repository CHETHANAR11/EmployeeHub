import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import DataTable from "react-native-paper";

const summary = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, "months");
    setCurrentDate(nextMonth);
  };
  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, "months");
    setCurrentDate(prevMonth);
  };
  const formatDate = (date) => {
    return date.format("MMMM, YYYY");
  };
  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2/8000/attendance-report-all-employees`,
        {
          params: {
            month: 11,
            year: 2023,
          },
        }
      );
      setAttendanceData(response.data.resport);
    } catch (error) {
      console.log("Error fetching attendance");
    }
  };
  useEffect(() => {
    fetchAttendanceReport();
  }, []);
  console.log(attendanceData);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
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
          onPress={goToPrevMonth}
          name="left"
          size={24}
          color="black"
        />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign
          onPress={goToNextMonth}
          name="right"
          size={24}
          color="black"
        />
      </View>
      <View style={{ marginHorizontal: 12 }}>
        {attendanceData?.map((index, index) => (
          <View key={index} style={{ marginVerticle: 10 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                  // marginLeft: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item?.name?.charAt(0)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.designation}({item?.employeeId})
                </Text>
              </View>
            </View>

            <View>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>P</DataTable.Title>
                  <DataTable.Title>A</DataTable.Title>
                  <DataTable.Title>HD</DataTable.Title>
                  <DataTable.Title>H</DataTable.Title>
                  <DataTable.Title>NW</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>{item?.present}</DataTable.Cell>
                  <DataTable.Cell>{item?.absent}</DataTable.Cell>
                  <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                  <DataTable.Cell>1</DataTable.Cell>
                  <DataTable.Cell>8</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default summary;

const styles = StyleSheet.create({});
