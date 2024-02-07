import React from "react";
import styles from "./layout.module.css";

const LayoutFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        Developed By <a herf="https://www.linkedin.com/in/shakiraliswe/">Shakir Ali</a>
      </div>
      <div className={styles.footerText}>Creative thoughts © All rights reserved.</div>
    </div>
  );
};

export default LayoutFooter;
