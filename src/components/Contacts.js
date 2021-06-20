import React from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export const Contacts = () => (
	<div>
		<div>
		<div>
				<div>
					Name
				</div>
				<div>
					<Input size="large" placeholder="Enter your name" />
				</div>
			</div>

			<div>
				<div>
					Email
				</div>
				<div>
					<Input size="large" placeholder="Enter your email" />
				</div>
			</div>

			<div>
				<div>
					Subject
				</div>
				<div>
				<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
				</div>
			</div>

			<div>
				<div>
					Message
				</div>
				<div>
					<Input.TextArea />
				</div>
			</div>

			<div>
				<Button type="primary">Send</Button>
			</div>
		</div>
		<div>
			MAP
		</div>
	</div>
);


export default Contacts;