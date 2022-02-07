/** @format */

import React from "react";
import ChatBot from "react-simple-chatbot";
import {ThemeProvider} from "styled-components";

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

	const steps = [
		{
			id: "1",
			message: "What is your name?",
			trigger: "2",
		},
		{
			id: "2",
			user: true,
			trigger: "3",
		},
		{
			id: "3",
			message: "Hi {previousValue}, nice to meet you!",
			end: true,
		},
	];
	return (
		<>
			<ThemeProvider theme={theme}>
				<ChatBot steps={steps} {...config} />
			</ThemeProvider>
		</>
	);
};

export default Chatbot;
