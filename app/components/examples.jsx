const React = require('react');
const {Link} = require('react-router');

const Examples = () => {
  return (
    <div>
      <h1 className="text-center"> Examples </h1>
      <p> Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=New York'> New York, NY </Link>
        </li>
        <li>
          <Link to='/?location=Boston'> Boston, MA </Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
