var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p> Chart JS </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
