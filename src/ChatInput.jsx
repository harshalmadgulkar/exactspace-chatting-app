import React, { useEffect, useRef, useState } from 'react';
import UserMention from './UserMention';

function ChatInput({ onSend, user_list }) {
	const [text, setText] = useState('');
	const inputRef = useRef(null);
	let [mentionVisible, setMentionVisible] = useState(false);
	console.log(mentionVisible);

	//keyDownHandler To Track @ button for mentioning
	useEffect(() => {
		let keyDownHandler = (e) => {
			if (e.key === '@') {
				setMentionVisible(true);
			}
		};
		document.addEventListener('keydown', keyDownHandler);

		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, [text]);

	//mention
	let handleMention = (mention) => {
		setText(text + `${mention}`);
		setMentionVisible(false);
	};

	const handleSend = () => {
		if (text.trim()) {
			onSend(text);
			setText('');
			inputRef.current.focus();
		}
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className='Chat-input'>
			{/* Mention */}
			{mentionVisible && (
				<div className='Chat-mentions'>
					<UserMention user_list={user_list} onMentionClick={handleMention} />
				</div>
			)}
			{/* TextArea */}
			<input
				type='text'
				value={text}
				ref={inputRef}
				placeholder='Type your message here and press Enter ↵'
				onKeyDown={(e) => (e.key === 'Enter' ? handleSend() : '')}
				//close mention when input is focused
				onFocus={() => setMentionVisible(false)}
				onChange={(e) => setText(e.target.value)}
			/>
			{/* <button onClick={handleSend}>Send</button> */}
		</div>
	);
}

export default ChatInput;
