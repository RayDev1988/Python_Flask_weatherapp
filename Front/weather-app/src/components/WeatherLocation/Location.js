import React from 'react';
import PropTypes from 'prop-types';
const LocationList = ({city}) => (
   <div>
       <h1>
        {city}
       </h1>
    </div>
);
Location.propTypes = {
    city : PropTypes.string.isRequired,
};
export default LocationList;