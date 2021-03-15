import React from "react"
import styled from "styled-components"

import InfoCard from "../infoCard"

import commonStyles from "../../styles/common.module.css"

const LocationCards = () => (
  <GuestAccomodationsWrapper>
    <p>
      The good news is that Galena is beautiful but the bad news is that we are
      unable to block many rooms for our family and friends. Since we want
      everyone to be able to attend our special day, please book your hotel
      accommodations as early as possible as hotels get booked months in
      advance. We hope you are able to share this special day with us!
    </p>
    <OptionsTitle className={commonStyles.pageInnerTitle}>Hotels</OptionsTitle>
    <OptionsWrapper>
      <InfoCard
        title="Eagle Ridge Resort &amp; Spa"
        icon="house"
        site="https://www.eagleridge.com/"
        phone="815-777-5000"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/h6b6yZJ1Yj5HazV1A"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          444 Eagle Ridge Dr, Galena, IL 61036
        </a>
      </InfoCard>

      <InfoCard
        title="Best Western Designer Inn &amp; Suites"
        icon="house"
        site="https://www.bestwestern.com/en_US/book/hotels-in-galena/best-western-designer-inn-suites/propertyCode.14119.html"
        phone="815-777-2577"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/awNyVQ4GGQBE3Djs7"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          9923 W Hwy 20, Galena, IL 61036, USA
        </a>
      </InfoCard>

      <InfoCard
        title="Country Inn and Suites"
        icon="house"
        site="https://www.radissonhotels.com/en-us/hotels/country-inn-galena-il"
        phone="815-777-2400"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/WcUCVEV654WY8MsNA"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          11334 Oldenburg Ln, Galena, IL 61036
        </a>
        <br />
        <br />
        <AddressLabel>
          <em>
            Minimal rooms blocked; ask for "Sixt/Bartee" room block for best
            rates
          </em>
        </AddressLabel>
      </InfoCard>

      <InfoCard
        title="AirBnB"
        icon="house"
        site="http://www.airbnb.com/"
      ></InfoCard>

      <InfoCard
        title="Ramada by Wyndham Galena Hotel &amp; Day Spa"
        icon="house"
        site="https://www.wyndhamhotels.com/ramada/galena-illinois/ramada-hotel-and-day-spa-galena/overview"
        phone="815-777-2043"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/Km4BpSLd1nmXtDsb7"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          11383 Hwy 20, Galena, IL 61036
        </a>
      </InfoCard>

      <InfoCard
        title="Desoto House"
        icon="house"
        site="https://desotohouse.com/"
        phone="815-777-0090"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/CRipbxtwDZtDfS7F6"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          230 S Main St, Galena, IL 61036
        </a>
      </InfoCard>

      <InfoCard title="Molly Kreiss" icon="house" site="" phone="815-297-4401">
        Luxury rental homes in the Galena territory
      </InfoCard>

      <InfoCard
        title="Scenic Hideaways"
        icon="house"
        site="https://www.scenichideaways.com/"
        phone="608-778-7742"
      ></InfoCard>

      <InfoCard
        title="Holiday Inn Dubuque"
        icon="house"
        site="https://www.ihg.com/holidayinn/hotels/us/en/dubuque/dbqia/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-DBQIA"
        phone="563-556-2000"
      >
        <AddressLabel>Address</AddressLabel>
        <a
          href="https://goo.gl/maps/xNwYv8BMEF8VMmaC6"
          target="_blank"
          rel="noopener noreferrer"
          className={commonStyles.link}
        >
          450 Main St Dubuque, IA 52001
        </a>
        <br />
        <br />
        <AddressLabel>
          <em>
            Minimal rooms blocked; ask for “Sixt - Bartee Wedding Block” room
            block for best rates
          </em>
        </AddressLabel>
      </InfoCard>
    </OptionsWrapper>
  </GuestAccomodationsWrapper>
)

const GuestAccomodationsWrapper = styled.div`
  margin-top: calc(50vh + 60px);
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const OptionsTitle = styled.h3`
  margin-top: 40px;
`

const AddressLabel = styled.p`
  margin-bottom: 0px;
`
export default LocationCards
