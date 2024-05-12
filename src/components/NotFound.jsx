import { Component } from "react";
import { Alert } from "react-bootstrap";

class NotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRedirectMessage: false,
		};
	}

	componentDidMount() {
		// 3sec
		this.redirectTimer = setTimeout(() => {
			this.setState({ showRedirectMessage: true });
		}, 3000);
	}

	componentWillUnmount() {
		// Nettoyer le timer avant que le composant ne soit démonté
		clearTimeout(this.redirectTimer);
	}

	render() {
		return (
			<>
				<h1 className=" py-5 mt-5 text-center">Not Found</h1>
				{this.state.showRedirectMessage && (
					<Alert variant="danger"> Redirect to Movies page</Alert>
				)}
				;
			</>
		);
	}
}
export default NotFound;
