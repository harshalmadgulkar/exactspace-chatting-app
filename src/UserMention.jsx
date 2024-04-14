import React from 'react';

const UserMention = ({ user_list, onMentionClick }) => {
	console.log(user_list);
	return (
		<div>
			<ul>
				{user_list.map((user, index) => {
					<li key={index}>{index} </li>;
				})}
			</ul>
		</div>
	);
};

export default UserMention;
