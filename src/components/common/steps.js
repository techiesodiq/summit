const steps = [
		{
			id: "1",
			message: "Hello, what is your name?",
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
			trigger: "4",
		},
		{
			id: "4",
			message: "Which of the categories do you want to enquire about?",
			trigger: "5",
		},
		{
			id: "5",
			options: [
				{value: 1, label: "Projects", trigger: "6"},
				{value: 2, label: "Summit University Admission", trigger: "7"},
				{value: 3, label: "Alumni Activities", trigger: "8"},
				{value: 4, label: "Students", trigger: "9"},
				{value: 5, label: "SUAB Services", trigger: "10"},
			],
		},
		{
			id: "6",
			message: "Please type your question here",
			trigger: "60",
		},
		{
			id: "60",
			user: true,
			validator: (value) => {
				if (value.toLowerCase().includes("sodiq".toLowerCase())) {
					return "Please come again";
				}
				return true;
			},
			trigger: ({value}) => {
				if (
					value.toLowerCase().includes("benefit") ||
					value.toLowerCase().includes("educational development")
				) {
					return "61";
				} else if (
					value.toLowerCase().includes("project") ||
					value.toLowerCase().includes("how many projects") ||
					value.toLowerCase().includes("number of projects")
				) {
					return "62";
				} else if (
									value.toLowerCase().includes("donate") ||
									value.toLowerCase().includes("how to donate") ||
									value.toLowerCase().includes("make donation")
								) {
									return "63";
								} else if (
									value.toLowerCase().includes("benefit donate") ||
									value.toLowerCase().includes("donor")
								) {
									return "64";
								} else if (
									value.toLowerCase().includes("card safety") ||
									value.toLowerCase().includes("safety of card")
								) {
									return "65";
								} else {
									return "6000";
								}
			},
		},
		{
			id: "61",
			message:
				"Summit, like other universities across the globe have various categories of project purposely targeted to advance education in the university and extended to the immediate local and National community.",
			trigger: "600"
		},
		{
			id: "62",
			message:
				"Presently there are several projects you can sponsor in our university. Please check the Project page to see the details.",
			trigger: "600"
		},
		{
			id: "63",
			message:
				"Donations can be made online, by clicking on a project of your choice, click the Donate button, this directs you to a payment gateway wherein you key in your card details and summit acknowledges the receipt.",
			trigger: "600"
		},
		{
			id: "64",
			message:
				"Donors are celebrated as partners in academic progress on our website and across the large media, in addition to the primary benefit from Allah.",
			trigger: "600"
		},
		{
			id: "65",
			message:
				"Summit employs the service top security software firms to secure our platform. SSL certificate is issued by our host providers from top anti sperm and malware providers in the world. Our payment gateway is provided by paystack which secures payers card against fraudulent activities.",
			trigger: "600"
		},
		{
			id: "600",
			message: "Select one",
			trigger: "601",
		},
		{
			id: "601",
			options: [
				{value: 1, label: "Go back to Projects", trigger: "6"},
				{value: 2, label: "Go back to Main Menu", trigger: "5"},				
			],
		},
		{
			id: "6000",
			message: "Kindly check the FAQ session for more information. You can also call us at (+234) 802 735 2041 or send us a mail at info@suab.org.",
			trigger: "600",
		},
	
		{
			id: "7",
			message: "Please type your question here",
			trigger: "70",
		},
		{
			id: "70",
			user: true,
			validator: (value) => {
				if (value.toLowerCase().includes("sodiq".toLowerCase())) {
					return "Please come again";
				}
				return true;
			},
			trigger: ({value}) => {
				if (
					value.toLowerCase().includes("course") ||
					value.toLowerCase().includes("available course") ||
					value.toLowerCase().includes("apply for") ||
					value.toLowerCase().includes("course apply") ||
					value.toLowerCase().includes("number of courses")|| 
					value.toLowerCase().includes("department")|| 
					value.toLowerCase().includes("faculty") 
				) {
					return "71";
				} else if (
					value.toLowerCase().includes("cut off mark") ||
					value.toLowerCase().includes("cut-off") ||
					value.toLowerCase().includes("cut off") 
					 
				) {
					return "72";
				} else if (
									value.toLowerCase().includes("admission list") ||
									value.toLowerCase().includes("release admission") ||
									value.toLowerCase().includes("list admission") ||
									value.toLowerCase().includes("admission status") 
								) {
									return "73";
								} else if (
								   value.toLowerCase().includes("remedial")
								) {
									return "74";
								} else if (
									value.toLowerCase().includes("ijmb") 
								) {
									return "75";
								} else if (
									value.toLowerCase().includes("diploma") 									
								) {
									return "76";
								}   else {
									return "7000";
								}
			},
		},
		{
			id: "71",
			message:
				"We currently have several courses from 3 faculties and 17 departments. Check the university website at www.summituniversity.edu.ng for more details",
			trigger: "700"
		},
		{
			id: "72",
			message:
				"The cut-off for each department varies. However, you will need a minimum of 6 credit units in your o'level results and 180 JAMB score to be eligible for an admission.",
			trigger: "700"
		},
		{
			id: "73",
			message:
				"Kindly check the university website at www.summituniversity.edu.ng for update on the admission",
			trigger: "700"
		},
		{
			id: "74",
			message:
				"Summit University offers remedial classes. You can check the university website at www.summituniversity.edu.ng for more updates.",
			trigger: "700"
		},
		{
			id: "75",
			message:
				"Summit University offers IJMB classes. You can check the university website at www.summituniversity.edu.ng for more updates.",
			trigger: "700"
		},
		{
			id: "76",
			message:
				"Summit University does not currently offers diploma classes. You can check the university website at www.summituniversity.edu.ng for more updates.",
			trigger: "700"
		},
		
		{
			id: "700",
			message: "Select one",
			trigger: "701",
		},
		{
			id: "701",
			options: [
				{value: 1, label: "Go back to Summit University Admission", trigger: "7"},
				{value: 2, label: "Go back to Main Menu", trigger: "5"},				
			],
		},
        {
			id: "7000",
			message: "Kindly check the FAQ session for more information. You can also call us at (+234) 802 735 2041 or send us a mail at info@suab.org.",
			trigger: "700",
		},

		{
			id: "8",
			message: "Please type your question here",
			trigger: "80",
		},
		{
			id: "80",
			user: true,
			validator: (value) => {
				if (value.toLowerCase().includes("sodiq".toLowerCase())) {
					return "Please come again";
				}
				return true;
			},
			trigger: ({value}) => {
				if (
					value.toLowerCase().includes("about alumni") ||
					value.toLowerCase().includes("alumni program") ||
					value.toLowerCase().includes("alumni event") 
				) {
					return "81";
				} else if (
					value.toLowerCase().includes("involve") ||
					value.toLowerCase().includes("get involved")
					 
				) {
					return "82";
				} else if (
									value.toLowerCase().includes("membership") ||
									value.toLowerCase().includes("member") ||
									value.toLowerCase().includes("join alumni")||
									value.toLowerCase().includes("be part of")
								) {
									return "83";
								} else if (
									value.toLowerCase().includes("benefit alumni") ||
									value.toLowerCase().includes("benefit") ||
									value.toLowerCase().includes("alumni benefit") ||
									value.toLowerCase().includes("alumni advantage")||
									value.toLowerCase().includes("benefit of joining alumni")
								) {
									return "84";
								} else if (
									value.toLowerCase().includes("alumni community") ||
									value.toLowerCase().includes("alumni communities")
								) {
									return "85";
								} else if (
									value.toLowerCase().includes("job") ||
									value.toLowerCase().includes("job listing") ||
									value.toLowerCase().includes("jobs listing") 
								) {
									return "86";
								}  else if (
									value.toLowerCase().includes("exclusive alumni discount") ||
									value.toLowerCase().includes("alumni discount") ||
									value.toLowerCase().includes("exclusive alumni") 
								) {
									return "87";
								} else if (
									value.toLowerCase().includes("alumni council") ||
									value.toLowerCase().includes("council alumni") 
									 
								) {
									return "88";
								} else {
									return "8000";
								}
			},
		},
		
		{
			id: "81",
			message:
				"Our events program brings together alumni to celebrate, debate, and collaborate, while our international network of local groups allows graduates to reconnect and make new friends in their area. ",
			trigger: "800"
		},
		{
			id: "82",
			message:
				"You can join either our alumni network or list of mentors",
			trigger: "800"
		},
		{
			id: "83",
			message:
				"A member becomes an alumnus of Summit and a member of our alumni community upon graduation joining individuals from different parts of the world.",
			trigger: "800"
		},
		{
			id: "84",
			message:
				"Networking and Career, Career Services, as well as	Exclusive Alumni Discounts",
			trigger: "800"
		},
		{
			id: "85",
			message:
				"Summit university currently has no alumni community.",
			trigger: "800"
		},
		{
			id: "86",
			message:
				"There are currently no recommended jobs at the moment.",
			trigger: "800"
		},
		{
			id: "87",
			message:
				"There is currently no information on exclusive discounts for alumni.",
			trigger: "800"
		},
		{
			id: "88",
			message:
				"There is no alumni council at the moment.",
			trigger: "800"
		},
		{
			id: "800",
			message: "Select one",
			trigger: "801",
		},
		{
			id: "801",
			options: [
				{value: 1, label: "Go back to Alumni Section", trigger: "8"},
				{value: 2, label: "Go back to Main Menu", trigger: "5"},				
			],
		},
        {
			id: "8000",
			message: "Kindly check the FAQ session for more information. You can also call us at (+234) 802 735 2041 or send us a mail at info@suab.org.",
			trigger: "800",
		},
		{
			id: "9",
			message: "Our university currently have students from different parts of the world. Kindly visit our university website at www.summituniversity.edu.ng for more updates.",
			trigger: 900,
		},
		{
			id: "900",
			message: "Select one",
			trigger: "901",
		},
		{
			id: "901",
			options: [
				{value: 1, label: "Go back to Student Section", trigger: "9"},
				{value: 2, label: "Go back to Main Menu", trigger: "5"},				
			],
		},
        {
			id: "9000",
			message: "Kindly check the FAQ session for more information. You can also call us at (+234) 802 735 2041 or send us a mail at info@suab.org.",
			trigger: "900",
		},
		{
			id: "10",
			message: "Summit University Advancement Bureau currently oversees 7 diifferent programmes which are stated below. Kindly click on any of them for more enquiries",
			trigger: "100",
		},
		{
			id: "100",
			options: [
				{value: 1, label: "Endowments", trigger: "101"},
				{value: 2, label: "Research Grants", trigger: "102"},
				{value: 3, label: "Professorial Chairs", trigger: "103"},
				{value: 4, label: "Students' Scholarship", trigger: "104"},
				{value: 5, label: "Investment", trigger: "105"},
				{value: 6, label: "International Relations", trigger: "106"},
				{value: 7, label: "Business Ventures", trigger: "107"},
				
			],
		},
		{
			id: "101",
			message: "The University's academic mission is supported through the Endowment and other gifts. Kindly check our endowment page for more enquiries",
			trigger: "1000",
		},
		{
			id: "102",
			message: "We are committed to providing innovative solutions to our societal problems through adequate research output. Check our Research Grants page for more enquiries",
			trigger: "1000",
		},
		{
			id: "103",
			message: "The University has available for endowments 4 professorial chairs. Please check the Professorial Chairs page for more updates",
			trigger: "1000",
		},
		{
			id: "104",
			message: "There are several scholarships awarded by the University and are designed	for various categories of students. You can check the Students' Scholarship page for more information.",
			trigger: "1000",
		},
		{
			id: "105",
			message: "We have 2 major investment programmes namely - the internal investment and the external investment. Check our Investment page for more enquiries.",
			trigger: "1000",
		},
		{
			id: "106",
			message: "We are a mission-driven entity, promote partnership with international and interested institutions, research institutes, academic outlets, and professional firms whose vision and mission are also for academic excellence and development in research. Visit our International Relations page for more enquiries.",
			trigger: "1000",
		},
		{
			id: "107",
			message: "We care about sustainability, thus, we have small business units that take care of students need. We are in the process of setting up several business ventures including agricultural farms, catering services and a computer business centre. For more information, kindly reach us on +2348027352041 Or gm@suab.org.",
			trigger: "1000",
		},
		{
			id: "1000",
			message: "Select one",
			trigger: "1001",
		},
		{
			id: "1001",
			options: [
				{value: 1, label: "Go back to SUAB Services", trigger: "10"},
				{value: 2, label: "Go back to Main Menu", trigger: "5"},				
			],
		},
		
	];

export default steps