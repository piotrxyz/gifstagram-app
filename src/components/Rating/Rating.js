import React from 'react';

const Ratings = ["G", "PG", "PG-13", "R"];
const rat = Ratings.map((rat) =>
    <option key={rat.toString()}>{rat}</option>
);

export default rat;