import React from 'react'

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const AuthContext = React.createContext({
  isAuth: false,
  userData: {id_persona:0,nombre:"",apellido:"",tipo_usuario:'Anonimo'},
  login:() => {},
  logout:() => {},
})
let count = 0;
class AuthProvider extends React.Component {
  constructor() {
    super()
    this.state={
      isAuth: false,  userData: {id_persona:0,nombre:"",apellido:"",tipo_usuario:'Anonimo'},tipo_usuario:""
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(user,pass,e) {
    if(e && count>0){
      fetch('http://localhost:8081/login', {
        method: 'POST',
        body: JSON.stringify({ usuario: user, contraseña: pass }),
        headers: myHeaders
      })
        .then(response =>  {return response.json()})
        .then(data => {
          this.setState({isAuth: true,userData:data,tipo_usuario:data});
        })
        console.log("user: "+ this.state.tipo_usuario);
      }
      count++;
  }

  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          userData: this.state.userData,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }

/*cargar = (user,pass) =>{
  fetch('http://localhost:8081/login', {
    method: 'POST',
    body: JSON.stringify({ usuario: user, contraseña: pass }),
    headers: myHeaders
  })
    .then(function(response){ 
      userData = response.json(); 
    })
}*/