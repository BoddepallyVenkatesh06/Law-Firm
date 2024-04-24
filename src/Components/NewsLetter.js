import React, {useState} from 'react';
import './NewsLetter.css';


const NewsLetter = () => {
    const [newsLetterForm, setNewsLetterForm] = useState({
		name: "",
		email: "",
	});

	const handleChange = (name, event) => {
		let value = event.target.value;
		setNewsLetterForm((prevFormFields) => ({
			...prevFormFields,
			[name]: value,
		}));
	};

	const handleClick = () => {
		if (!name || !email) {
			alert("Please fill in all the required fields");
			return;
		} else {
			const newFormFields = { ...newsLetterForm };
			Object.keys(newFormFields).forEach((key) => (newFormFields[key] = ""));
			setNewsLetterForm(newFormFields);
		}
	};

	const { name, email } = newsLetterForm;
  return (
    <>
			<div className="news-letter-wrapper">
				<div className="news-letter-header">
					<h3>Subscribe Our Newsletter</h3>
				</div>
				<div className="input-wrapper">
					<div className="input-container1">
						<input
							type="text"
							placeholder="Name:"
							className="input1"
							value={name}
							onChange={(e) => {
								handleChange("name", e);
							}}
						/>
					</div>
					<div className="input-container2">
						<input
							type="text"
							placeholder="Enter your Email"
							className="input2"
							value={email}
							onChange={(e) => {
								handleChange("email", e);
							}}
						/>
					</div>
					<div className="btn-container">
						<button type="submit" onClick={handleClick}>
							SEND
						</button>
					</div>
				</div>
			</div>
		</>
  )
}

export default NewsLetter; 
