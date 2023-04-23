import api from '@/constants/api'
import { IQuote } from '@/types'

export const getAllQuotes = async () => {
  try {
    const response = await api.get(`/quotes`)
    return response.data.items
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch quotes')
  }
}

export const getQuote = async (_uuid: string) => {
  try {
    const response = await api.get(`/quotes/${_uuid}`)
    return response
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch quote')
  }
}

export const addQuote = async (quote: IQuote) => {
  try {
    const response = await api.post(`/quotes`, quote)
    return response
  } catch (error) {
    console.error(error)
    throw new Error('Failed to add quote')
  }
}

export const updateQuote = async (quote: IQuote) => {
  try {
    const response = await api.put(`/quotes/${quote._uuid}`, quote)
    return response
  } catch (error) {
    console.error(error)
    throw new Error('Failed to update quote')
  }
}

export const deleteQuote = async (_uuid: string) => {
  try {
    const response = await api.delete(`/quotes/${_uuid}`)
    return response
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete quote')
  }
}
