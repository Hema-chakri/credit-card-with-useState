// Style your elements here
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  display: flex;
  background-size: cover;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#3b4b69, #344e7a);
  width: 40%;
`

export const Heading = styled.h1`
  color: #ffffff;
`
export const HorizontalLine = styled.hr`
  width: 70%;
  line-height: 0.5;
  color: #ffd773;
`
export const CardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50vh;
  margin-top: 120px;
  width: 80%;
  margin-left: 30px;
  border-radius: 10px;
`
export const AccNumber = styled.p`
  color: #ffffff;
  padding-top: 100px;
  font-size: 25px;
  padding-left: 50px;
`
export const CardHolderName = styled.p`
  color: #c3cad9;
  padding-top: 40px;
  padding-left: 50px;
`
export const Name = styled.p`
  color: #d3d9e0;
  padding-left: 50px;
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  justify-content: center;
  background-color: #ffffff;
`
export const PaymentHeading = styled.h1`
  color: #475569;
`
export const PaymentForm = styled.form`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`
export const PaymentInput = styled.input`
  border: 1px solid #c3cad9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  border-top: none;
  margin-bottom: 30px;
`
