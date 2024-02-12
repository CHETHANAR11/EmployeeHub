import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="add_details" />
      <Stack.Screen name="markattendance" />
    </Stack>
  );
}
