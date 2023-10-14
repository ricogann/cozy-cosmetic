import React from 'react';

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=upn&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://connectionsgame.org/">Connections Puzzle</a>
      </div>
      <style>
        {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 400px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }
          .gmap_iframe {
            height: 400px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Map;
