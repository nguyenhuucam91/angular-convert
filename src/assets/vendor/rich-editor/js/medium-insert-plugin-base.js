//start editor
var editor = new MediumEditor('#linkhay-editor', {
  toolbar: {
    buttons: [
      {
        name: 'bold',
        contentDefault: "<i class='fa fa-bold'></i>"
      },
      {
        name: 'italic',
        contentDefault: "<i class='fa fa-italic'></i>"
      },
      {
        name: 'underline',
        contentDefault: "<i class='fa fa-underline'></i>"
      },
      {
        name: 'anchor',
        contentDefault: "<i class='fa fa-link'></i>"
      },
      {
        name: 'justifyLeft',
        contentDefault: "<i class='fa fa-align-left'></i>"
      },
      {
        name: 'justifyCenter',
        contentDefault: "<i class='fa fa-align-center'></i>"
      },
      {
        name: 'justifyRight',
        contentDefault: "<i class='fa fa-align-right'></i>"
      },
      {
        name: 'h2',
        contentDefault: "<svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M3.982 14.68H6.072V2.074H2.904V4.626H0.638V0.644H14.564V4.626H12.298V2.074H9.13V14.68H11.22V16H3.982V14.68Z' fill='currentColor'></path>\
        </svg>"
      },
      {
        name: 'h3',
        contentDefault: "<svg width='11' height='12' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M2.896 11.04H4.416V1.872H2.112V3.728H0.464V0.832H10.592V3.728H8.944V1.872H6.64V11.04H8.16V12H2.896V11.04Z' fill='currentColor'></path>\
        </svg>"
      },
      {
        name:'unorderedlist',
        contentDefault: "<i class='fa fa-list-ul'></i>"
      },
      {
        name: 'quote',
        contentDefault: "<i class='fa fa-quote-right'></i>"
      },
      {
        name: 'removeFormat',
        contentDefault: "<i class='fa fa-eraser'></i>"
      }
  ]
  },
})


$("#linkhay-editor").mediumInsert({
    editor: editor,
    addons: {
      images: {
        label: "<svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M9 11.5C10.933 11.5 12.5 9.933 12.5 8C12.5 6.067 10.933 4.5 9 4.5C7.067 4.5 5.5 6.067 5.5 8C5.5 9.933 7.067 11.5 9 11.5Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        <path d='M2.5 4.5H3.5' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        <path d='M14.5 2.5H12.5L11.5 0.5H6.5L5.5 2.5H1.5C0.948 2.5 0.5 2.948 0.5 3.5V12.5C0.5 13.052 0.948 13.5 1.5 13.5H14.5C15.052 13.5 15.5 13.052 15.5 12.5V3.5C15.5 2.948 15.052 2.5 14.5 2.5Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        </svg>",
        autoGrid: 0,
        styles: {
          wide: {
            label: "<svg width='32' height='16' viewBox='0 0 32 16'>\
            <path d='M28.909 7.08544H32V8.91403H28.909V12.5712L23.9999 7.99973L28.909 3.42828V7.08544Z'></path>\
            <path d='M3.09098 8.91437H0V7.08579H3.09098V3.42863L8.00006 8.00008L3.09098 12.5715V8.91437Z'></path>\
            <path d='M10 0H22V16H10V0Z'></path>\
            </svg>"
          },
          left: false,
          right: false,
          grid: false,
          fit: {
            label: "<svg width='24' height='16' viewBox='0 0 24 16'>\
            <path d='M6 0H18V16H6V0Z'></path>\
            <path d='M0 0H2V16H0V0Z'></path>\
            <path d='M24 16H22V0H24V16Z'></path>\
            </svg>"
          },
          full: {
            label: "<svg width='32' height='16' viewBox='0 0 32 16'>\
            <path d='M27.091 7.08551H24V8.91409H27.091V12.5712L32.0001 7.9998L27.091 3.42834V7.08551Z'></path>\
            <path d='M4.90902 7.08551H8V8.91409H4.90902V12.5712L-6.10352e-05 7.9998L4.90902 3.42834V7.08551Z'></path>\
            <path d='M10 0H22V16H10V0Z'></path>\
            </svg>"
          }
        },

        actions: { // (object) Actions for an optional second toolbar
          remove: { // (object) Remove action configuration
            label: "<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>\
            <g opacity='0.5'>\
            <g filter='url(#filter0_d)'>\
            <circle cx='19' cy='17' r='17' fill='black'></circle>\
            <circle cx='19' cy='17' r='16.25' stroke='white' stroke-width='1.5'></circle>\
            </g>\
            <path d='M18.125 16H16.375V22H18.125V16Z' fill='white'></path>\
            <path d='M21.625 16H19.875V22H21.625V16Z' fill='white'></path>\
            <path d='M22.5 10C22.5 9.4 22.15 9 21.625 9H16.375C15.85 9 15.5 9.4 15.5 10V12H12V14H12.875V24C12.875 24.6 13.225 25 13.75 25H24.25C24.775 25 25.125 24.6 25.125 24V14H26V12H22.5V10ZM17.25 11H20.75V12H17.25V11ZM23.375 14V23H14.625V14H23.375Z' fill='white'></path>\
            </g>\
            <defs>\
            <filter id='filter0_d' x='0' y='0' width='38' height='38' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>\
            <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>\
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>\
            <feOffset dy='2'></feOffset>\
            <feGaussianBlur stdDeviation='1'></feGaussianBlur>\
            <feColorMatrix type='matrix' values='0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.15 0'></feColorMatrix>\
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>\
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'></feBlend>\
            </filter>\
            </defs>\
            </svg>"
          }
        },
      },
      //for embeded documents
      embeds: {
        label: "<svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M1.1875 0.4375L11.6875 7L1.1875 13.5625V0.4375Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        </svg>",
        styles: {
          wide: false,
          left: false,
          right: false,
          grid: false,
          fit: {
            label: "<svg width='24' height='16' viewBox='0 0 24 16'>\
            <path d='M6 0H18V16H6V0Z'></path>\
            <path d='M0 0H2V16H0V0Z'></path>\
            <path d='M24 16H22V0H24V16Z'></path>\
            </svg>"
          },
          full: {
            label: "<svg width='32' height='16' viewBox='0 0 32 16'>\
            <path d='M27.091 7.08551H24V8.91409H27.091V12.5712L32.0001 7.9998L27.091 3.42834V7.08551Z'></path>\
            <path d='M4.90902 7.08551H8V8.91409H4.90902V12.5712L-6.10352e-05 7.9998L4.90902 3.42834V7.08551Z'></path>\
            <path d='M10 0H22V16H10V0Z'></path>\
            </svg>"
          }
        }
      },
      hr: {
        label: "<svg class='svg-icon-addon-hr' width='25' height='15'>\
                  <g fill-rule='evenodd'>\
                  <path d='M8.45 12H5.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.247 0 .45-.226.45-.5 0-.276-.203-.5-.45-.5H8.45z'></path>\
                      <path d='M17.45 12H14.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.248 0 .45-.226.45-.5 0-.276-.202-.5-.45-.5h-2.25z'></path>\
                  </g>\
                </svg>"
      }
    }
})
