/** @format */

import React from "react";
import ChatBot from "react-simple-chatbot";
import {ThemeProvider} from "styled-components";
import steps from "./steps"

const Chatbot = (props) => {
	const theme = {
		background: "#f5f8fb",
		fontFamily: "Helvetica Neue",
		headerBgColor: "#11B67A",
		headerFontColor: "#fff",
		headerFontSize: "15px",
		botBubbleColor: "#11B67A",
		botFontColor: "#fff",
		userBubbleColor: "#fff",
		userFontColor: "#4a4a4a",
	};

	const config = {
		width: "300px",
		height: "400px",
		floating: true,
	};

	
	return (
		<>
			<ThemeProvider theme={theme}>
				<ChatBot steps={steps} {...config} />
			</ThemeProvider>
		</>
	);
};

export default Chatbot;
