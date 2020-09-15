import React from "react"
import styled from "styled-components"

import WeddingPartyPerson from "./weddingPartyPerson"

import commonStyles from "../../styles/common.module.css"

const WeddingParty = () => (
  <div style={{ textAlign: "center" }}>
    <h1 className={commonStyles.pageInnerTitle}>The Wedding Party</h1>
    <WeddingPartyWrapper>
      <WeddingPartyPerson
        name="Erin Carr"
        title="Matron of Honor"
        desc="Erin Carr is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Arica Bartee"
        title="Bridesmaid"
        desc="Arica Bartee is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Alannah Rosenbalm"
        title="Bridesmaid"
        desc="Alannah Rosenbalm is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Sydney Black"
        title="Bridesmaid"
        desc="Sydney Black is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Emma Kocjancic"
        title="Bridesmaid"
        desc="Emma Kocjancic is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Kate Sixt"
        title="Bridesmaid"
        desc="Kate Sixt is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
    </WeddingPartyWrapper>

    <WeddingPartyWrapper>
      <WeddingPartyPerson
        name="Damien Seawood"
        title="Best Man"
        desc="Damien Seawood is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Stephen Ramirez"
        title="Groomsman"
        desc="Stephen Ramirez is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Taylor James"
        title="Groomsman"
        desc="Taylor James is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Michael Pence"
        title="Groomsman"
        desc="Michael Pence is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Nate Stonebraker"
        title="Groomsman"
        desc="Nate Stonebraker is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <WeddingPartyPerson
        name="Austin Bartee"
        title="Groomsman"
        desc="Austin Bartee is...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
    </WeddingPartyWrapper>
  </div>
)

const WeddingPartyWrapper = styled.div`
  width: 300px;
  margin: 20px;
  display: inline-block;

  @media (max-width: 750px) {
    width: calc(100% - 40px);
    flex-direction: column;
  }
`

export default WeddingParty
