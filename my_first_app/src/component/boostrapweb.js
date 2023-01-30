import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav class="nav">
  <a class="nav-link active" aria-current="page" href="/">Home</a>
  <a class="nav-link" href="/">About</a>
  <a class="nav-link" href="/">Conatact Us</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
            </div>
        )
    }
}
export default Nav;