import moment from 'moment'
export const format = (timestamp: number) =>
  moment.unix(timestamp).format('DD.MM.YYYY: HH:mm')
