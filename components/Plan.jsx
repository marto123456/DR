import React, { useState } from "react"

import styles from "../styles/Plan.module.css"
import Tabs from "./TabComponent/Tabs"

const Plan = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Best Off-plan Projects</h1>
        <p>some paragraphs</p>
        <Tabs />
        <div className={styles.developersContainer}>
          <h2>Developers</h2>
          <p>Some developer content here</p>
        </div>
      </div>
    </>
  )
}

export default Plan
