import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class BadgeForm extends React.Component {
	handleClick = (event) => {
		console.log(`The button was cliked`);
		event === null ? this.validate(document.getElementById('aa')) : console.log('empty');
	};
	validate = (e) => {
		if (e.checkValidity() === true) {
			console.log('ok');
		} else console.log('nook');
	};
	handleSubmit = (event) => {
		event.preventDefault(); //this function prevent the default value for type='submit' in <button>
		console.log(`The form was submited`);
		console.log(this.props.formValues);
	};
	handlePDF = () => {
		const input = document.getElementById('bad');

		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF('p', 'in', [ 612, 792 ]);
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = imgProps.height * pdfWidth / imgProps.width;
			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
			pdf.save('download.pdf');
		});
	};

	render() {
		return (
			<div id="bad">
				<h1>New Attendant</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>First Name*</label>
						<input
							required
							onChange={this.props.onnnChange}
							className="form-control"
							type="text"
							name="firstName"
							value={this.props.formValues.firstName}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							onChange={this.props.onnnChange}
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={this.props.onnnChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>
					<div className="form-group">
						<label>Job Title*</label>
						<input
							required
							onChange={this.props.onnnChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobtTitle}
						/>
					</div>
					<div className="form-group">
						<label>Website*</label>
						<input
							onChange={this.props.onnnChange}
							placeholder="https://www.example.com"
							pattern="https?://.+"
							className="form-control"
							type="url"
							name="twitter"
							required
							value={this.props.formValues.twitter}
						/>
						<span className="validity" />
					</div>
					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
