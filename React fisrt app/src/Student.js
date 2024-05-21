import React, { Component } from 'react';
// import pt from 'prop-types';

// const Student = (props) =>{
//     return (
//         <>
//             <h1>Hello {props.name}</h1>

//         </>
//     )
// }

// export default Student;



// Composing Functional Components
// import React from 'react';
// import ReactDOM from 'react-dom';

const Student = (props) =>{
    return <h1>Hello, {props.name}</h1>
};

// console.log('here is student', Student)
// Student.propTypes = {
    // name: pt.string
// };

export default Student; 