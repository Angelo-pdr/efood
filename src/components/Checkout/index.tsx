import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import * as S from './styles'

import { RootState } from '../../store'
import { clear, close } from '../../store/reduce/cart'
import { usePurchaseMutation } from '../../services/api'
import { isDisabled } from '@testing-library/user-event/dist/utils'

type Props = {
  open: (arg: boolean) => void
  price: string
}

const Checkout = ({ open, price }: Props) => {
  const [payWithCard, setPayWithCard] = useState(false)
  const { items } = useSelector((state: RootState) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

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
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O cep precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(2, 'O numero precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMoth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit(values) {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiveName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMoth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const conclude = () => {
    open(false)
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const IsDisabled = () => {
    const IsTrue =
      form.values.receiveName != '' &&
      form.values.address != '' &&
      form.values.city != '' &&
      form.values.cep != '' &&
      form.values.addressNumber != '' &&
      form.values.addressNumber != ''
    return IsTrue ? true : false
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <>
      {isSuccess ? (
        <S.Card>
          <S.Title>Pedido realizado - {data?.orderId}</S.Title>
          <p className="margin-bottom">
            Estamos felizes em informar que seu pedido já está em processo de
            preparaçãoe, em breve, será entregue no endereço fornecido.
          </p>
          <p className="margin-bottom">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="margin-bottom">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="margin-bottom">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button onClick={conclude}>
            <p>Concluir</p>
          </S.Button>
        </S.Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payWithCard ? (
            <S.Card>
              <S.Title>Pagamento - Valor a pagar {price}</S.Title>
              <S.InpuitGroup>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardDisplayName"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
              </S.InpuitGroup>
              <div className="flex">
                <S.InpuitGroup maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </S.InpuitGroup>
                <S.InpuitGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </S.InpuitGroup>
              </div>
              <div className="flex">
                <S.InpuitGroup maxWidth="155px">
                  <label htmlFor="expiresMoth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMoth"
                    name="expiresMoth"
                    value={form.values.expiresMoth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresMoth') ? 'error' : ''}
                    mask="99"
                  />
                </S.InpuitGroup>
                <S.InpuitGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </S.InpuitGroup>
              </div>
              <div className="buttons">
                <S.Button type="submit">
                  <p>Finalizar pagamento</p>
                </S.Button>
                <S.Button type="button" onClick={() => setPayWithCard(false)}>
                  <p>Voltar para a edição de endereço</p>
                </S.Button>
              </div>
            </S.Card>
          ) : (
            <S.Card>
              <S.Title>Entrega</S.Title>
              <S.InpuitGroup>
                <label htmlFor="receiveName">Quem irá receber</label>
                <input
                  type="text"
                  id="receiveName"
                  name="receiveName"
                  value={form.values.receiveName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiveName') ? 'error' : ''}
                />
              </S.InpuitGroup>
              <S.InpuitGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  type="tel"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </S.InpuitGroup>
              <S.InpuitGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InpuitGroup>
              <div className="flex">
                <S.InpuitGroup maxWidth="155px">
                  <label htmlFor="cep">Cep</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="99999-999"
                  />
                </S.InpuitGroup>
                <S.InpuitGroup maxWidth="155px">
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    type="text"
                    id="addressNumber"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('addressNumber') ? 'error' : ''
                    }
                  />
                </S.InpuitGroup>
              </div>
              <S.InpuitGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.InpuitGroup>
              <div className="buttons">
                {IsDisabled() ? (
                  <S.Button type="submit" onClick={() => setPayWithCard(true)}>
                    <p>Continuar com o pagamento</p>
                  </S.Button>
                ) : (
                  <S.Button
                    disabled
                    type="submit"
                    className="disabled"
                    onClick={() => setPayWithCard(true)}
                  >
                    <p>Continuar com o pagamento</p>
                  </S.Button>
                )}

                <S.Button type="button" onClick={() => open(false)}>
                  <p>Voltar para o carrinho</p>
                </S.Button>
              </div>
            </S.Card>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
