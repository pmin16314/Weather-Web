import React from "react";
import Header from "./components/Header";
import styles from "./styles";

const App = () => {
  return (
    <div
      className={`w-full overflow-hidden ${styles.flexCenter} ${styles.paddingX} font-poppins`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>
  );
};

export default App;