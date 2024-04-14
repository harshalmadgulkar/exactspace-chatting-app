import React from 'react';

function ChatMessage({ text, username, likes, onLike, bgColor }) {
	return (
		<div className='message-box'>
			<div className='Chat-user-logo' style={{ backgroundColor: bgColor }}>
				<span>{username[0]} </span>
			</div>
			<div className='Chat-message'>
				<span className='Chat-message-username'>{username}</span>
				<div className='message-text-like'>
					<span className='Chat-message-text'>{text}</span>
					<div>
						<button className='Chat-message-like' onClick={onLike}>
							Like ({likes})
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatMessage;
