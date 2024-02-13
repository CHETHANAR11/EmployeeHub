import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { useLocalSearchParams } from "expo-router";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

const user = () => {
  const params = useLocalSearchParams();
  const [attendanceStatus, setAttendanceStatus] = useState("present");
  const [currentDate, setCurrentDate] = useState(moment());
  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const nextDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(nextDate);
  };
  const formatdate = (date) => {
    return date.format("MMMM,D,YYYY");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
        <Text>{formatdate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>
      <Pressable
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 10,
        }}
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
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            {params?.name.charAt(0)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text style={{ marginTop: 5, color: "gray" }}>
            {params?.destination}({params?.id})
          </Text>
        </View>
      </Pressable>
      <Text style={{ fontSize: 16, fontWeignt: "500", marginHorizontal: 12 }}>
        Basic Pay:{params?.salary}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeignt: "500",
            letterSpacing: 3,
            marginTop: 7,
            flex: 1,
          }}
        >
          ATTENDANCE
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("present")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "present" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Present</Text>
          </Pressable>
          <Pressable
            onPress={() => setAttendanceStatus("absent")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {attendanceStatus === "absent" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Absent</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("halfday")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "halfday" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Halfday</Text>
          </Pressable>
          <Pressable
            onPress={() => setAttendanceStatus("holiday")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {attendanceStatus === "holiday" ? (
              <FontAwesome5 name="dot-circle" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Holiday</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TextInput
            style={{
              borderRadius: 6,
              marginTop: 10,
              borderWidth: 2,
              borderColor: "#E0E0E0",
              padding: 10,
              flex: 1,
            }}
            placeholderTextColor="black"
            placeholder="Advance / Loans"
          />
          <TextInput
            style={{
              borderRadius: 6,
              marginTop: 10,
              borderWidth: 2,
              borderColor: "#E0E0E0",
              padding: 10,
              flex: 1,
            }}
            placeholderTextColor="black"
            placeholder="Extra Bonus"
          />
        </View>
      </View>
    </View>
  );
};

export default user;

const styles = StyleSheet.create({});
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const user = () => {
//   return (
//     <View>
//       <Text>user</Text>
//     </View>
//   );
// };

// export default user;

// const styles = StyleSheet.create({});
