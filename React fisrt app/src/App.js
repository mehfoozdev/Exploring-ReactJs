import React, { Component } from 'react';
import Student from './Student'

// class App extends Component{
//     render(props){
//         return (
//             // For single 
//             // <div> 
//             //     <h1>Hello World !</h1>
//             //     <p>My first React App</p>
//             // </div>

//             // Return multiple elements
//             // <React.Fragment>
//             //     <h1>Hello World !</h1>
//             //     <p>My first React App</p>
//             // </React.Fragment>

//             // Return multiple elements using empty tag
//             <>
//                 <h1>Hello World !</h1>
//                 <p>We are learning {this.props.name}</p>
//             </>
//         )
//     }
// }


// export default App;


// Composing Functional Components

const App = () => {
    return (
        <div>
            <Student name='Mehfooz Ali'/>
            <Student name='Rehman Khan'/>
            <Student name='Abdul Rauf'/>
            
        </div>
    )
}

export default App;