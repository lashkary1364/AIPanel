import React from 'react'
import { Dion } from './Dion'
import { NaghdinegiSal } from './NaghdinegiSal'
import { Productivity } from './Productivity'
import { Profitability } from './Profitability'
import { Resiliency } from './Resiliency'
import { Container, Row, Col } from "shards-react"
export const TabAvar = () => {
  return (
    <Container fluid className="main-content-container px-4 mt-3" dir="rtl" >
      <Row>
        <Col>
          <Resiliency></Resiliency>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col><Profitability></Profitability></Col>
        <Col><Productivity></Productivity></Col>
      </Row>
      <Row className="mt-3">
        <Col><NaghdinegiSal></NaghdinegiSal></Col>
        <Col><Dion></Dion></Col>
      </Row>
    </Container>
  )
}

