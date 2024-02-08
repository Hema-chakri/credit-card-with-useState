// Write your code here
import {useState} from 'react'
import {
  CreditCardContainer,
  CardContainer,
  Heading,
  HorizontalLine,
  CardBgContainer,
  AccNumber,
  CardHolderName,
  Name,
  PaymentContainer,
  PaymentForm,
  PaymentHeading,
  PaymentInput,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')

  const onChangeAccountNumber = event => {
    setAccountNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardBgContainer data-testid="creditCard">
          <AccNumber>{accountNumber}</AccNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <Name>{name.toUpperCase()}</Name>
        </CardBgContainer>
      </CardContainer>
      <PaymentContainer>
        <PaymentForm>
          <PaymentHeading>Payment Method</PaymentHeading>
          <PaymentInput
            type="text"
            value={accountNumber}
            placeholder="Card Number"
            onChange={onChangeAccountNumber}
          />
          <PaymentInput
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </PaymentForm>
      </PaymentContainer>
    </CreditCardContainer>
  )
}

export default CreditCard
