import GoogleFont, { TypographyStyle } from "react-typography";
import Typography from "typography";

import lawtonTheme from "typography-theme-lawton";
lawtonTheme.googleFonts = [{ name: "Rubik", styles: [] }];
lawtonTheme.baseFontSize = "18px";
lawtonTheme.bodyFontFamily = ["Rubik"];
lawtonTheme.headerFontFamily = ["Rubik"];
lawtonTheme.headerWeight = 700;
lawtonTheme.bodyWeight = 300;
lawtonTheme.boldWeight = 500;
lawtonTheme.baseLineHeight = 1.51;

const typography = new Typography(lawtonTheme);

export default typography;
export { GoogleFont, TypographyStyle };
