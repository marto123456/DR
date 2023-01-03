import React, { useState } from "react"
import styles from "../../styles/Tabs.module.css"
import TabNavItem from "../V3/TabNavItem"
import TabContent from "../V3/TabContent"
import ListingCard from "../ListingCard"
import ListingCard2 from "../ListingCard2"
import ListingCard1 from "../ListingCard1"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <>
      <div className={styles.Tabs}>
        <ul className={styles.nav}>
          <TabNavItem
            title="Apartments"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Homes"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Hotels"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className={styles.outlet}>
          <TabContent id="tab1" activeTab={activeTab}>
            <ListingCard />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <ListingCard2 />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <ListingCard1 />
          </TabContent>
        </div>
      </div>
    </>
  )
}

export default Tabs
