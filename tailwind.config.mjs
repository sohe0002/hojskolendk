/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
            screens: {
              'sm': '640px',
              // => @media (min-width: 640px) { ... }
        
              'md': '768px',
              // => @media (min-width: 768px) { ... }
        
              'lg': '924px',
              // => @media (min-width: 1024px) { ... }
        
             
            },


        /* Tilføj din egen farvepalette nedenfor */
colors: {
   transparent: 'transparent',
 current: 'currentColor',
  'brun': {
                50: '#F0E5E5',     
                100: '#DFC8C8',
                200: '#C29494',
                300: '#A35D5D',
                400: '#6F3F3F',
                500: '#382020',
                600: '#2D1A1A',
                700: '#201313',
                800: '#180D0D',
                900: '#0A0606',
                950:'#060404',
},
'orange': {
    50: '#FFEEE5',     
    100: '#FFDDCC',
    200: '#FFBB99',
    300: '#FF9966',
    400: '#FF7734',
    500: '#FF5700',
    600: '#CC4400',
    700: '#993301',
    800: '#662300',
    900: '#331100',
    950:'#190900',
},

'blaa': {
    50: '#FAFCFF',     
    100: '#F5FAFE',
    200: '#EBF4FF',
    300: '#E4F2FF',
    400: '#DBECFF',
    500: '#D2E8FF',
    600: '#75B8FF',
    700: '#1B88FF',
    800: '#0059B8',
    900: '#002C5C',
    950:'#01152E',
},

'gron': {
    50: '#FDFDFB',     
    100: '#FDFDFB',
    200: '#FCFCF8',
    300: '#F9F9F1',
    400: '#F7F7ED',
    500: '#F6F6EA',
    600: '#D9D9A6',
    700: '#BCBC62',
    800: '#88883B',
    900: '#44441C',
    950:'#20200E',
},


        },

         /* Tilføj din egen spacing nedenfor */
spacing: {
    'xxs': '8px',
    'xs': '16px',
    's': '24px',
    'sm': '32px',
    'm': '40px',
    'ml': '48px',
    'lg': '64px',
    'xl': '80px',
    '2xl': '96px',
    '3xl': '112px',
    '4xl': '128px',
    '5xl': '112px',
    '6xl': '128px',
    '7xl': '112px',
    '8xl': '128px',
    '9xl': '424px',
},

        /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
fontFamily: {
    inter: ['Inter', 'sans-serif'],
    acme: ['Acme', 'sans-serif'],
},

        /* Tilføj dit typografiske hierarki herunder */
fontSize: {
p_desk: ['20px', { lineHeight: '1.25rem' }],
h4_desk: ['24px', { lineHeight: '2.25rem' }],
h3_desk: ['31px', { lineHeight: '3rem' }],
h2_desk: ['36px', { lineHeight: '3.75rem' }],
h1_desk: ['64px', { lineHeight: '4.5rem' }],

p_mobil: ['12px', { lineHeight: '1.25rem' }],
h4_mobil: ['14px', { lineHeight: '2.25rem' }],
h3_mobil: ['17px', { lineHeight: '3rem' }],
h2_mobil: ['18px', { lineHeight: '' }],
h1_mobil: ['32px', { lineHeight: '4.5rem' }],
 },

        /* Tilføj dit fontvægt-hierarki nedenfor */
fontWeight: {
    regular: '400',
    semibold: '600',
    bold: '800', 
},

        /* Borders - borderstørrelser herunder */
        // borderWidth: {
        //     DEFAULT: '1px',
        //     0: '0px',
        //     2: '2px',
        // },

        /* Border radius størrelser herunder */
borderRadius: {
 none: '0px',
 small: '10px', 
 medium: '15px',
 large: '20px',
 },

        /* Box shadows herunder */
        // boxShadow: {
        //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */  
        // },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}