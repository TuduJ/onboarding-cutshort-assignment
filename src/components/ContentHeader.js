import React from 'react';

function ContentHeader(props) {
    const {heading, subHeading} = props;
    return (
        <>
            <div className="text-center col-10 mx-auto">
              <h2>{heading}</h2>
              <p>{subHeading}</p>
            </div>
        </>
    );
}

export default ContentHeader;