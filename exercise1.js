// function Welcome(props) {
// 	return <h1>Hello minions</h1>;
// }

class Welcome extends React.Component {
	constructor() {
		super();
		this.state = {count: 5, title: "Number of minions"};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	decrement(e) {
		const {count} = this.state;
		this.setState({count: count - 1});
	}

	increment() {
		const {count} = this.state;
		this.setState({count: count + 1, blegh: 42});		
	}

	render() {
		console.log("rendering");
		const {count, title, blegh} = this.state;

		return (
				<section className="site-wrap">
					<h1>Hello my minions, in number <br />
					{count}</h1>
					<p>you probably wonder <br />
					why I gathered you {blegh, title}</p>
					<button onClick={this.decrement}>-</button>
					<button onClick={this.increment}>+</button>
				</section>
			);
	}
}


ReactDOM.render(
	<Welcome />,
	document.getElementById("application"));

// ReactDOM.render(
// 	<Welcome2 />,
// 	document.getElementById("application2"));


// ReactDOM.render(
// 	<MyAppHelloWorld />,
// 	document.getElementById("application"));