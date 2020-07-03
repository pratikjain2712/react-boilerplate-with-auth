import React from 'react';
import PropTypes from 'prop-types';

export default function Path({ name, fill, stroke }) {
  switch (name) {
    case 'marker':
      return (
        <path
          fill={fill}
          d="M8 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
        />
      );

    case 'mlMenue':
      return (
        <path
          fill={fill}
          fillRule="evenodd"
          d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"
        />
      );

    case 'clock':
      return (
        <g id="clock" clipPath="url(#clip-clock)">
          <rect width="100" height="100" fill="transparent" />
          <path
            id="Path_672"
            data-name="Path 672"
            d="M70.661,975.362a47.661,47.661,0,1,0,47.661,47.661A47.661,47.661,0,0,0,70.661,975.362Zm0,19.417a3.531,3.531,0,0,1,3.53,3.531v22.673l16.6,9.6a3.51,3.51,0,0,1-3.53,6.068c-6.114-3.526-12.284-7.084-18.369-10.592a3.5,3.5,0,0,1-1.765-3.034V998.31A3.531,3.531,0,0,1,70.661,994.779Z"
            transform="translate(-20.321 -972.684)"
            fill={fill}
          />
        </g>
      );

    case 'calender':
      return (
        <g id="calendar" clipPath="url(#clip-calendar)">
          <rect width="100" height="100" fill="transparent" />
          <g
            id="Group_581"
            data-name="Group 581"
            transform="translate(-1365.545 -232.18)"
          >
            <g
              id="noun_calender_1012261"
              transform="translate(1370.998 237.621)"
            >
              <g
                id="Group_577"
                data-name="Group 577"
                transform="translate(0 0)"
              >
                <path
                  id="Path_602"
                  data-name="Path 602"
                  d="M30.031,958.348a2.037,2.037,0,0,0-1.814,2.069v5.952H17.394A11.45,11.45,0,0,0,6,977.764v12.223c0,.053,0,.106,0,.158v46.472a11.449,11.449,0,0,0,11.4,11.4H84.269a11.421,11.421,0,0,0,11.363-11.4V990.273c0-.042,0-.085,0-.128a2.025,2.025,0,0,0,0-.222V977.764a11.423,11.423,0,0,0-11.363-11.4H73.1v-5.952a2.037,2.037,0,1,0-4.074,0v5.952H32.291v-5.952a2.037,2.037,0,0,0-2.069-2.069q-.1,0-.191,0Zm-12.637,12.1H28.217V976.4a2.037,2.037,0,0,0,4.074,0v-5.952H69.023V976.4a2.037,2.037,0,0,0,4.074,0v-5.952H84.269a7.312,7.312,0,0,1,7.289,7.32v10.345H10.074V977.764a7.339,7.339,0,0,1,7.321-7.32Zm-7.321,21.74H91.558v44.434a7.314,7.314,0,0,1-7.289,7.321H17.394a7.341,7.341,0,0,1-7.321-7.321V992.183Z"
                  transform="translate(-5.998 -958.346)"
                  fill={fill}
                  fillRule="evenodd"
                />
              </g>
            </g>
            <rect
              id="Rectangle_724"
              data-name="Rectangle 724"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1385.185 277.956)"
              fill={fill}
            />
            <rect
              id="Rectangle_725"
              data-name="Rectangle 725"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1409.997 277.956)"
              fill={fill}
            />
            <rect
              id="Rectangle_726"
              data-name="Rectangle 726"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1431.266 277.956)"
              fill={fill}
            />
            <rect
              id="Rectangle_727"
              data-name="Rectangle 727"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1385.185 299.224)"
              fill={fill}
            />
            <rect
              id="Rectangle_728"
              data-name="Rectangle 728"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1409.997 299.224)"
              fill={fill}
            />
            <rect
              id="Rectangle_729"
              data-name="Rectangle 729"
              width="14.179"
              height="14.179"
              rx="1"
              transform="translate(1431.266 299.224)"
              fill={fill}
            />
            <rect
              id="Rectangle_730"
              data-name="Rectangle 730"
              width="85.073"
              height="21.268"
              rx="1"
              transform="translate(1374.551 249.598)"
              fill={fill}
            />
          </g>
        </g>
      );

    case 'dropdown':
      return (
        <g id="drop_down" data-name="drop down" clipPath="url(#clip-drop_down)">
          <rect width="100" height="100" fill="transparent" />
          <path
            id="Path_652"
            data-name="Path 652"
            d="M50.479,65.537,2.6,17.146,15.013,4.6,50.479,40.445,85.945,4.6,98.358,17.146Z"
            transform="translate(0.022 15.432)"
            fill={fill}
          />
        </g>
      );
    case 'dropdownRounded':
      return (
        <g
          id="dropdownRounded"
          data-name="drop down"
          clipPath="url(#clip-drop_down)"
        >
          <rect width="100" height="100" fill="transparent" />
          <path
            d="M50,75.5c-1.6,0-3.1-0.6-4.3-1.7L4.2,35.5c-2.6-2.4-2.8-6.4-0.4-9c2.4-2.6,6.4-2.8,9-0.4L50,60.5l37.2-34.3c2.6-2.4,6.6-2.2,9,0.4c2.4,2.6,2.2,6.6-0.4,9L54.3,73.8C53.1,75,51.6,75.5,50,75.5z"
            fill={fill}
          />
        </g>
      );
    case 'hidePassword':
      return (
        <g
          id="hide_password"
          data-name="hide password"
          clipPath="url(#clip-hide_password)"
        >
          <rect width="100" height="100" fill="transparent" />
          <g
            id="Group_666"
            data-name="Group 666"
            transform="translate(-1739.366 -662.366)"
          >
            <g
              id="Eye_Icon"
              data-name="Eye Icon"
              transform="translate(1739.366 662.366)"
              opacity="0.2"
            >
              <path
                id="Bounds"
                d="M1,0H101V100H1Z"
                transform="translate(-1)"
                fill="none"
              />
              <path
                id="Icon"
                d="M47.833,4.5A49.091,49.091,0,0,0,2,35.75a49.236,49.236,0,0,0,91.667,0A49.091,49.091,0,0,0,47.833,4.5Zm0,52.083A20.631,20.631,0,0,1,27,35.75a20.833,20.833,0,0,1,41.667,0A20.631,20.631,0,0,1,47.833,56.583Zm0-33.333a12.277,12.277,0,0,0-12.5,12.5,12.5,12.5,0,1,0,25,0A12.277,12.277,0,0,0,47.833,23.25Z"
                transform="translate(2.167 14.25)"
                fill={fill}
              />
            </g>
            <path
              id="Path_717"
              data-name="Path 717"
              d="M-2234.9,526.263l-45.072,87.113"
              transform="translate(4045.509 142.584)"
              fill="none"
              stroke={stroke}
              strokeWidth="10"
            />
          </g>
        </g>
      );
    case 'language':
      return (
        <g id="language" clipPath="url(#clip-language)">
          <rect width="100" height="100" fill="transparent" />
          <g
            id="Group_667"
            data-name="Group 667"
            transform="translate(2285.134 -1035.866)"
          >
            <path
              id="Path_718"
              data-name="Path 718"
              d="M52.46,5.016c-.127-.008-.251-.011-.377-.016V29.241a124.767,124.767,0,0,0,16.255-1.31A56.37,56.37,0,0,0,52.46,5.016Z"
              transform="translate(-2284.526 1033)"
              fill={fill}
            />
            <path
              id="Path_719"
              data-name="Path 719"
              d="M32.717,27.914a124.5,124.5,0,0,0,16.322,1.327V5c-.154.006-.306.014-.459.023A55.049,55.049,0,0,0,32.717,27.914Z"
              transform="translate(-2285.955 1033)"
              fill={fill}
            />
            <path
              id="Path_720"
              data-name="Path 720"
              d="M48.657,96.651c.125.008.25.011.377.016V72.425a124.731,124.731,0,0,0-16.254,1.31A56.363,56.363,0,0,0,48.657,96.651Z"
              transform="translate(-2285.949 1037.976)"
              fill={fill}
            />
            <path
              id="Path_721"
              data-name="Path 721"
              d="M75.679,49.566H96.64a48.1,48.1,0,0,0-7.682-24,109,109,0,0,1-16.184,4.4A77.42,77.42,0,0,1,75.679,49.566Z"
              transform="translate(-2282.999 1034.518)"
              fill={fill}
            />
            <path
              id="Path_722"
              data-name="Path 722"
              d="M52.083,72.425V96.666c.155-.006.306-.013.459-.023A55.045,55.045,0,0,0,68.4,73.753,124.316,124.316,0,0,0,52.083,72.425Z"
              transform="translate(-2284.526 1037.976)"
              fill={fill}
            />
            <path
              id="Path_723"
              data-name="Path 723"
              d="M72.773,71.681a109.092,109.092,0,0,1,16.184,4.4,48.114,48.114,0,0,0,7.681-24H75.679A77.373,77.373,0,0,1,72.773,71.681Z"
              transform="translate(-2282.998 1036.475)"
              fill={fill}
            />
            <path
              id="Path_724"
              data-name="Path 724"
              d="M69.819,30.383a130.571,130.571,0,0,1-17.736,1.46V49.211H72.731A71.828,71.828,0,0,0,69.819,30.383Z"
              transform="translate(-2284.526 1034.873)"
              fill={fill}
            />
            <path
              id="Path_725"
              data-name="Path 725"
              d="M87.183,23.183A48.354,48.354,0,0,0,59.533,5.968,61.4,61.4,0,0,1,72.352,27.1,106.228,106.228,0,0,0,87.183,23.183Z"
              transform="translate(-2283.974 1033.071)"
              fill={fill}
            />
            <path
              id="Path_726"
              data-name="Path 726"
              d="M28.688,49.212H49.336V31.844a130.738,130.738,0,0,1-17.789-1.468A72.743,72.743,0,0,0,28.688,49.212Z"
              transform="translate(-2286.252 1034.873)"
              fill={fill}
            />
            <path
              id="Path_727"
              data-name="Path 727"
              d="M14.717,78.269A48.349,48.349,0,0,0,42.366,95.484,61.4,61.4,0,0,1,29.549,74.353,106.16,106.16,0,0,0,14.717,78.269Z"
              transform="translate(-2287.283 1038.119)"
              fill={fill}
            />
            <path
              id="Path_728"
              data-name="Path 728"
              d="M59.533,95.484a48.333,48.333,0,0,0,27.635-17.2,106.531,106.531,0,0,0-14.822-3.924A61.356,61.356,0,0,1,59.533,95.484Z"
              transform="translate(-2283.974 1038.119)"
              fill={fill}
            />
            <path
              id="Path_729"
              data-name="Path 729"
              d="M28.866,29.968a109.023,109.023,0,0,1-16.183-4.4A48.091,48.091,0,0,0,5,49.566H25.962A77.374,77.374,0,0,1,28.866,29.968Z"
              transform="translate(-2288 1034.518)"
              fill={fill}
            />
            <path
              id="Path_730"
              data-name="Path 730"
              d="M72.732,52.083H52.083V69.451a131.071,131.071,0,0,1,17.788,1.468A72.741,72.741,0,0,0,72.732,52.083Z"
              transform="translate(-2284.526 1036.475)"
              fill={fill}
            />
            <path
              id="Path_731"
              data-name="Path 731"
              d="M31.6,70.911a130.781,130.781,0,0,1,17.736-1.46V52.083H28.688A71.82,71.82,0,0,0,31.6,70.911Z"
              transform="translate(-2286.252 1036.475)"
              fill={fill}
            />
            <path
              id="Path_732"
              data-name="Path 732"
              d="M42.367,5.968a48.338,48.338,0,0,0-27.637,17.2,106.487,106.487,0,0,0,14.822,3.924A61.378,61.378,0,0,1,42.367,5.968Z"
              transform="translate(-2287.282 1033.071)"
              fill={fill}
            />
            <path
              id="Path_733"
              data-name="Path 733"
              d="M25.962,52.083H5a48.1,48.1,0,0,0,7.683,24,108.973,108.973,0,0,1,16.183-4.4A77.374,77.374,0,0,1,25.962,52.083Z"
              transform="translate(-2288 1036.475)"
              fill={fill}
            />
          </g>
        </g>
      );
    case 'map':
      return (
        <g id="map" clipPath="url(#clip-map)">
          <rect width="100" height="100" fill="transparent" />
          <path
            id="Path_736"
            data-name="Path 736"
            d="M37.016,0C57.543,0,74.368,16.217,74.368,36.406c0,16.548-17.835,43.025-31.632,57.256a8.017,8.017,0,0,1-11.1,0C17.835,79.431,0,53.616,0,36.406,0,16.217,16.489,0,37.016,0Zm0,21.512c8.749,0,15.479,6.619,15.479,14.893A15.106,15.106,0,0,1,37.016,51.63a15.059,15.059,0,1,1,0-30.117Z"
            transform="translate(12.616 2.241)"
            fill={fill}
            fillRule="evenodd"
          />
        </g>
      );

    default:
      return <div>404</div>;
  }
}

Path.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
