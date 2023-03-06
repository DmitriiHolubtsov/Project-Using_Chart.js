interface ColorsPalette {
  dark: string;
  btnTextColor: string;
  gradientDark: string;
  blueHighlight: string;
  pink: string;
  white: string;
  headerBcg: string;
  reportLinkColor: string;
  black: string;
  borderColor: string;
  btnGradientHover: string;
  menuBcg: string;
  chartPointBorderColor: string;
  chartLineColor: string;
  chartBottomBorder: string;
}

const palette: ColorsPalette = {
  dark: '#212121',
  btnTextColor: '#212121',
  gradientDark: 'linear-gradient(117.42deg, #000 1.24%, #1f2122 81.6%)',
  btnGradientHover:
    'linear-gradient(286.49deg, #bddfff -8.49%, #b0d0fa 14.4%, #8daaed 74.6%, #576cd8 114.88%, #5368d7 118.69%)',
  blueHighlight: '#1634A3',
  pink: '#D395BA',
  white: '#FFFFFF',
  headerBcg: '#131415',
  reportLinkColor: '#aacaf8',
  black: '#000000',
  borderColor: '#687788',
  menuBcg: '#121314',
  chartPointBorderColor: '#8CA9ED',
  chartLineColor: '#8CA9ED',
  chartBottomBorder:
    'linear-gradient(230.98deg, #BDDFFF -1.46%, #B0D0FA 13.54%, #8DAAED 41.04%, #576CD8 79.38%, #5368D7 81.88%)',
};

export default palette;
