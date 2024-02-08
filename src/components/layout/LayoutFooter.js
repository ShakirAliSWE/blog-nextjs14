import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

const LayoutFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <Link href={"https://www.linkedin.com/in/shakiraliswe/"}>Shakir Ali</Link>
      </div>
      <div className={styles.footerText}>Creative thoughts © All rights reserved.</div>
    </div>
  );
};

export default LayoutFooter;
