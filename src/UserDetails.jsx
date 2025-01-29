import PropTypes from "prop-types";
import {Fragment} from 'react'

export default function UserDetails({user}) {
  return (
    <Fragment>
      <h2>{user.Name}</h2>
      <p>{user.Age}</p>
      <p>{user.Occupation}</p>
    </Fragment>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    Occupation: PropTypes.string.isRequired
  }).isRequired
};