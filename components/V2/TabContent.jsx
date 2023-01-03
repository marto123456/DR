import React, { useEffect } from "react"
import styles from "../../styles/Tabs.module.css"

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className={styles.TabContent}>{children}</div>
  ) : null
}

export default TabContent
