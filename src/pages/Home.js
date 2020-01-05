import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Invoice extends Component {
	handlePdf = () => {
		const input = document.getElementById('page');

		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF('p', 'px', 'a4');
			var width = pdf.internal.pageSize.getWidth();
			var height = pdf.internal.pageSize.getHeight();

			pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
			pdf.save('test.pdf');
		});
	};

	render() {
		return (
			<React.Fragment>
				{/* <React.Fragment> helps to omit a lot of <div> tags */}
				<h2>Temporal Home Page</h2>
				<p>This is a button to test pdfs generation from a screenshot</p>
				<button onClick={this.handlePdf} className="btn btn-primary btn-lg mx-auto">
					Generate PDF
				</button>
			</React.Fragment>
		);
	}
}

export default Invoice;
