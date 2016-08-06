const React = require('react');

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title"> About </h1>
      <p> This is a small weather app I built using React and OpenWeatherMap in order to learn React basics. </p>
      <ul>
        <li>
          <a href='https://github.com/joeldarling/react-weather' target="_blank"> Check out the repo.</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
