import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import ChatComponent from "./Chat";

const uri = encodeURI("future.email.address.12@gmail.com");
const source = "https://calendar.google.com/calendar/embed?src=" + uri;

class Calendar extends Component {
  render() {
    return (
      <Grid templateColumns="repeat(5, 1fr)" gap={6} justifyContent="center">
        <Box w="100%" h="10" bg="blue.500">
          <iframe src={source} height="600px" width="800px"></iframe>
        </Box>
        <Box w="400px" h="10" bg="blue.500">
          <ChatComponent />
        </Box>
      </Grid>
    );
  }
}

export default Calendar;
