import { Component } from "react";
import { Alert } from "react-bootstrap";

class NotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRedirectMessage: true,
		};
	}

	componentDidMount() {
		// 3sec
		this.redirectTimer = setTimeout(() => {
			this.setState({ showRedirectMessage: false });
		}, 3000);
	}

	componentWillUnmount() {
		// Nettoyer  avant demonte
		clearTimeout(this.redirectTimer);
	}

	render() {
		return (
			<>
				<h1 className=" py-5 mt-5 text-center">Not Found</h1>
				{this.state.showRedirectMessage && (
					<Alert variant="danger"> This page does not exist</Alert>
				)}
				;
			</>
		);
	}
}
export default NotFound;
