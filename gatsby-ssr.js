/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import CustomLayout from "./wrapPageElement"
// import React from "react";

export const wrapPageElement = CustomLayout

// const headComponents = [
//     <script type="text/javascript">
//         function googleTranslateElementInit() {
//         new google.translate.TranslateElement({pageLanguage: 'pt'}, 'google_translate_element')
// }
// </script>,
// <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
// ]
// export const onRenderBody = ({setHeadComponents}) => {
//     setHeadComponents(headComponents);
// };