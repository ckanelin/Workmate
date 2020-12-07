import logo from './logo.svg';
import './App.css';

import SignIn from './Components/SignIn';
import Register from './Components/Register';
import DashBoard from './Components/Dashboard';

const initialState = {
  route: 'signIn',
}

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  onChangeRoute = (route) =>{
    if(route !== 'signOut'){
      this.setState({route: route});
    }else{
      this.setState(initialState);
    }
  }

  onLogOut = (route) => {
    this.setState({route: 'signIn'})
  }

  render(){
    const {route} = this.state;

    return (
      <div>
        {
          route === 'home' ?
          <div>
             <DashBoard onLogOut={this.onLogOut}/>
          </div>:

          <div className="flex">
            <div className="w-50 vh-100 bg-light-blue">
            </div>

            <div className="w-50 vh-100 flex flex-column justify-center items-center">
                {
                    route === 'signIn'?
                    <SignIn 
                      onChangeRoute={this.onChangeRoute}
                    /> :
          
                    <Register 
                      onChangeRoute={this.onChangeRoute} 
                    /> 
                }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
