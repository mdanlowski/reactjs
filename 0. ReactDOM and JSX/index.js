import React from 'react';
import ReactDOM from 'react-dom';

// ReactComponent must return a single JSX component (multiple adjacent must be wrapped with one)
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Hello humans, I'm _mdski_</h1>
        <h3>My top vacation spots:</h3>
      </header>
    );
  }
}

class MyList extends React.Component {
  render() {
    return (
      <ul>
        <li>Eilat</li>
        <li>Mars</li>
        <li>Pleiades</li>
      </ul>
    );
  }
}

function MyFunctionalComponent() {
  return (
    <div className="group">
      <Header />
      <MyList />
      <p className="my-bio">I like trains and nice butts (weapon butts ofc)</p>
    </div>
  );
}

// class Main extends React.Component {
//   render() {
//     return (
//       <main>
//         <Header />
//         <FunctionalComponent />
//         <p>Things to bring for the space trip:</p>
//         <MyList />
//       </main>
//     );
//   }
// }

// render(what to render, where to put it)
ReactDOM.render(<MyFunctionalComponent />, document.getElementById('root'));