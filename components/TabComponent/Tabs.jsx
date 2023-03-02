import React, { useState } from "react"
import styles from "../../styles/Tabs.module.css"
import TabNavItem from "../V2/TabNavItem"
import TabContent from "../V2/TabContent"
import EllipsisText from "react-ellipsis-text"
import Image from "next/image"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <>
      <div className={styles.Tabs}>
        <ul className={styles.nav}>
          <TabNavItem
            title="Penthouse"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Apartments"
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
          <TabNavItem
            title="Homes"
            id="tab4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className={styles.outlet}>
          <TabContent id="tab1" activeTab={activeTab}>
            <div className={styles.tabContentContainer}>
              <div className={styles.tabContentLeft}>
                <h2>Penthouse</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ornare suscipit consectetur.Fusce non mauris ex. Donec semper,
                  odio vitae lobortis faucibus, magna sem dapibus quam.
                  <br />
                  <br />
                  Pellentesque eu fermentum quam, a congue purus. Vivamus a
                  aliquet justo. Aliquam rhoncus suscipit nulla sit amet
                  molestie. Phasellus vitae dictum ex. Aenean molestie orci sed
                  sapien mollis commodo.
                </p>
                <ul className={styles.tabUl}>
                  <li>Flor: 1</li>
                  <li>Bedroom: 3</li>
                  <li>Bathroom: 1</li>
                  <li>Size: 6.77sqft</li>
                </ul>
                {/* <button className={styles.tabButton}>See Project</button> */}
              </div>
              <div className={styles.tabContentRight}>
                <div
                  style={{
                    width: "100%",
                    height: "450px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/Harare-at-The-Destination-12212022_223334.jpg"
                    layout="fill"
                  />
                </div>
                {/* <button>See Project</button> */}
              </div>
            </div>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <div className={styles.tabContentContainer}>
              <div className={styles.tabContentLeft}>
                <h2>Apartments</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ornare suscipit consectetur.Fusce non mauris ex. Donec semper,
                  odio vitae lobortis faucibus, magna sem dapibus quam.
                  <br />
                  <br />
                  Pellentesque eu fermentum quam, a congue purus. Vivamus a
                  aliquet justo. Aliquam rhoncus suscipit nulla sit amet
                  molestie. Phasellus vitae dictum ex. Aenean molestie orci sed
                  sapien mollis commodo.
                </p>
                <ul className={styles.tabUl}>
                  <li>Flor: 1</li>
                  <li>Bedroom: 3</li>
                  <li>Bathroom: 1</li>
                  <li>Size: 6.77sqft</li>
                </ul>
                {/* <button>See Project</button> */}
              </div>
              <div className={styles.tabContentRight}>
                <div
                  style={{
                    width: "100%",
                    height: "450px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/Harare-at-The-Destination-12212022_223334.jpg"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <div className={styles.tabContentContainer}>
              <div className={styles.tabContentLeft}>
                <h2>Hotels</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ornare suscipit consectetur.Fusce non mauris ex. Donec semper,
                  odio vitae lobortis faucibus, magna sem dapibus quam.
                  <br />
                  <br />
                  Pellentesque eu fermentum quam, a congue purus. Vivamus a
                  aliquet justo. Aliquam rhoncus suscipit nulla sit amet
                  molestie. Phasellus vitae dictum ex. Aenean molestie orci sed
                  sapien mollis commodo.
                </p>
                <ul className={styles.tabUl}>
                  <li>Flor: 1</li>
                  <li>Bedroom: 3</li>
                  <li>Bathroom: 1</li>
                  <li>Size: 6.77sqft</li>
                </ul>
                {/* <button>See Project</button> */}
              </div>
              <div className={styles.tabContentRight}>
                <div
                  style={{
                    width: "100%",
                    height: "450px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/Harare-at-The-Destination-12212022_223334.jpg"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id="tab4" activeTab={activeTab}>
            <div className={styles.tabContentContainer}>
              <div className={styles.tabContentLeft}>
                <h2>Homes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ornare suscipit consectetur.Fusce non mauris ex. Donec semper,
                  odio vitae lobortis faucibus, magna sem dapibus quam.
                  <br />
                  <br />
                  Pellentesque eu fermentum quam, a congue purus. Vivamus a
                  aliquet justo. Aliquam rhoncus suscipit nulla sit amet
                  molestie. Phasellus vitae dictum ex. Aenean molestie orci sed
                  sapien mollis commodo.
                </p>
                <ul className={styles.tabUl}>
                  <li>Flor: 1</li>
                  <li>Bedroom: 3</li>
                  <li>Bathroom: 1</li>
                  <li>Size: 6.77sqft</li>
                </ul>
                {/* <button>See Project</button> */}
              </div>
              <div className={styles.tabContentRight}>
                <div
                  style={{
                    width: "100%",
                    height: "450px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/img/Harare-at-The-Destination-12212022_223334.jpg"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </TabContent>
        </div>
      </div>
    </>
  )
}

export default Tabs
