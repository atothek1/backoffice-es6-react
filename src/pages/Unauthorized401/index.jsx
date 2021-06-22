import React from "react";
import { Text } from "../../components";

export function Unauthorized401() {
  return <Text as="h2">You are not logged in. Please login to continue.</Text>;
}
