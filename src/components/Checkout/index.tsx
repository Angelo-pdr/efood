import { useState } from 'react'
import Button from '../Button'
import { Title, InpuitGroup, Card } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {
  open: (arg: boolean) => void
  price: string
}

const Checkout = ({ open, price }: Props) => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      receiveName: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMoth: '',
      expiresYear: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiveName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMoth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit(values) {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {payWithCard ? (
        <Card>
          <Title>Pagamento - Valor a pagar {price}</Title>
          <InpuitGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input
              type="text"
              id="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('fullname', form.errors.cardDisplayName)}
            </small>
          </InpuitGroup>
          <div className="flex">
            <InpuitGroup maxWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('fullname', form.errors.cardNumber)}
              </small>
            </InpuitGroup>
            <InpuitGroup maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <input
                type="text"
                id="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullname', form.errors.cardCode)}</small>
            </InpuitGroup>
          </div>
          <div className="flex">
            <InpuitGroup maxWidth="155px">
              <label htmlFor="expiresMoth">Mês de vencimento</label>
              <input
                type="text"
                id="expiresMoth"
                value={form.values.expiresMoth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('fullname', form.errors.expiresMoth)}
              </small>
            </InpuitGroup>
            <InpuitGroup maxWidth="155px">
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                type="text"
                id="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('fullname', form.errors.expiresYear)}
              </small>
            </InpuitGroup>
          </div>
          <div className="buttons">
            <Button type="submit">
              <p>Finalizar pagamento</p>
            </Button>
            <Button onClick={() => setPayWithCard(false)}>
              <p>Voltar para a edição de endereço</p>
            </Button>
          </div>
        </Card>
      ) : (
        <Card>
          <Title>Entrega</Title>
          <InpuitGroup>
            <label htmlFor="receiveName">Quem irá receber</label>
            <input
              type="text"
              id="receiveName"
              value={form.values.receiveName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('fullname', form.errors.receiveName)}
            </small>
          </InpuitGroup>
          <InpuitGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="tel"
              id="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullname', form.errors.address)}</small>
          </InpuitGroup>
          <InpuitGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullname', form.errors.city)}</small>
          </InpuitGroup>
          <div className="flex">
            <InpuitGroup maxWidth="155px">
              <label htmlFor="cep">Cep</label>
              <input
                type="text"
                id="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullname', form.errors.cep)}</small>
            </InpuitGroup>
            <InpuitGroup maxWidth="155px">
              <label htmlFor="addressNumber">Número</label>
              <input
                type="text"
                id="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('fullname', form.errors.addressNumber)}
              </small>
            </InpuitGroup>
          </div>
          <InpuitGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullname', form.errors.complement)}</small>
          </InpuitGroup>
          <div className="buttons">
            <Button type="submit" onClick={() => setPayWithCard(true)}>
              <p>Continuar com o pagamento</p>
            </Button>
            <Button onClick={() => open(false)}>
              <p>Voltar para o carrinho</p>
            </Button>
          </div>
        </Card>
      )}
    </form>
  )
}

export default Checkout
