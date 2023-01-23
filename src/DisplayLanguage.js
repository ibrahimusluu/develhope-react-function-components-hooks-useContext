import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  console.log(language);
  return (
    <div>
      {language === "en" ? (
        <h1>English</h1>
      ) : language === "tr" ? (
        <h1>Türkçe</h1>
      ) : (
        <h1>non-language</h1>
      )}
    </div>
  );
}

// "Consumer" ALSO WORKS with Function Components
// export function DisplayLanguage() {
//   return (
//     <div>
//       <LanguageContext.Consumer>
//         {(language) => {
//           console.log(language);

//           return language === "en" ? (
//             <h1>English</h1>
//           ) : language === "tr" ? (
//             <h1>Türkçe</h1>
//           ) : (
//             <h1>non-language</h1>
//           );
//         }}
//       </LanguageContext.Consumer>
//     </div>
//   );
// }

// import React from "react";
// import { LanguageContext } from "./LanguageContext";

// export class DisplayLanguage extends React.Component {
//   render() {
//     // let AQI = 140;

//     return (
//       <div>
//         <LanguageContext.Consumer>
//           {(language) => {
//             console.log(language);
//             // return language === "en"
//             //   ? "English"
//             //   : language === "tr" // "else-if" here
//             //   ? "Türkçe"
//             //   : "non-language"; // in ternary operators, do we have to declare "else" parts?

//             return language === "en" ? (
//               <h1>English</h1>
//             ) : language === "tr" ? (
//               <h1>Türkçe</h1>
//             ) : (
//               <h1>non-language</h1>
//             ); // in ternary operators, do we have to declare "else" parts?

//             // language === "en" ? "English" : "Türkçe"
//             // language === "en" ? "English" : language === "tr" ? "Türkçe"

//             // return AQI > 300 //if condition
//             //   ? "Air Quality is BAD" //if first condition satisfies
//             //   : AQI > 200 //first else-if condition
//             //   ? "Air Quality is NORMAL"
//             //   : // : AQI > 100 //second else-if condition
//             //     // ? "Air Quality is GOOD"
//             //     "Air Quality is EXCELLENT"; //if all the conditions fail
//           }}
//         </LanguageContext.Consumer>
//       </div>
//     );
//   }
// }
