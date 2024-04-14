import React, { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

// const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];
const user_list = [
	{ name: 'Alan', bgColor: '#E74C3C' },
	{ name: 'Bob', bgColor: '#6699CC' },
	{ name: 'Carol', bgColor: '#1ABC9C' },
	{ name: 'Dean', bgColor: '#9966CC' },
	{ name: 'Elin', bgColor: '#F39C12' },
];

function App() {
	const [messages, setMessages] = useState([
		{
			text: "Hey Bob! 🌞 Hope you.re doing well! We're having a barbecue this weekend and would love to have you join us! Good food, good company, and good times guaranteed! Let me know if you can make it!",
			username: 'Alan',
			likes: 0,
			bgColor: '#E74C3C',
		},
		{
			text: 'Good Morning!',
			username: 'Carol',
			likes: 0,
			bgColor: '#1ABC9C',
		},
	]);

	const addMessage = (text) => {
		const randomUser = Math.floor(Math.random() * user_list.length);
		const username = user_list[randomUser].name;
		const bgColor = user_list[randomUser].bgColor;
		setMessages([...messages, { text, username, likes: 0, bgColor }]);
	};

	const likeMessage = (index) => {
		setMessages(
			messages.map((message, i) =>
				i === index ? { ...message, likes: message.likes + 1 } : message
			)
		);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h3>Introductions</h3>
				<br />
				<p>This Channel Is For Company Wide Chatter</p>
			</header>
			<main className='App-main'>
				<div className='Chat-messages'>
					{messages.map((message, index) => (
						<ChatMessage
							key={index}
							text={message.text}
							username={message.username}
							likes={message.likes}
							bgColor={message.bgColor}
							onLike={() => likeMessage(index)}
						/>
					))}
				</div>
				<ChatInput user_list={user_list} onSend={addMessage} />
			</main>
		</div>
	);
}

export default App;
