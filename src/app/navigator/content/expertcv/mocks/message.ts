export const message = (
	userFirstName: string,
	userLastName: string,
	userEmail: string,
	currentDatetime: string,
	userMessage: string
) => {
	return {
		blocks: [
			{
				type: "context",
				elements: [
					{
						type: "image",
						image_url:
							"https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg",
						alt_text: "cute cat",
					},
					{
						type: "mrkdwn",
						text: "*Cat* has approved this message.",
					},
				],
			},
			{
				type: "divider",
			},
			{
				type: "section",
				fields: [
					{
						type: "plain_text",
						text: `First Name: ${userFirstName}`,
						emoji: true,
					},
				],
			},
			{
				type: "section",
				fields: [
					{
						type: "plain_text",
						text: `Last Name: ${userLastName}`,
						emoji: true,
					},
				],
			},
			{
				type: "section",
				fields: [
					{
						type: "plain_text",
						text: `Email: ${userEmail}`,
						emoji: true,
					},
				],
			},
			{
				type: "section",
				fields: [
					{
						type: "plain_text",
						text: `Datetime: ${currentDatetime}`,
						emoji: true,
					},
				],
			},
			{
				type: "divider",
			},
			{
				type: "header",
				text: {
					type: "plain_text",
					text: "Message",
					emoji: true,
				},
			},
			{
				type: "section",
				text: {
					type: "plain_text",
					text: `${userMessage}`,
					emoji: true,
				},
			},
		],
	};
};
