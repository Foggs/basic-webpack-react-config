
  // Main.js

  class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { questions: [] }
    }

    componentDidMount() {

    }

    render() {
        return (
        	<div className="App">
    	    	<div className="App-header">
    	        	<img src={logo} className="App-logo" alt="logo" />
    	        	<h2>React Quiz</h2>
    	      	</div>
        	    <Question content="What is your favourite food?" />
        	</div>
        )/>;
    }
  }