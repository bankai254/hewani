export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const languageOptions = [
  { id: 'en', label: 'English' },
  { id: 'sw', label: 'Swahili' },
]

export const cities = [
  { name: 'Nairobi', lat: '-1.286389', lng: '36.817223' },
  { name: 'Mombasa', lat: '-4.043680', lng: '39.668207' },
  { name: 'Kisumu', lat: '-0.102210', lng: '34.761711' },
  { name: 'Nakuru', lat: '-0.303099', lng: '36.080026' },
  { name: 'Eldoret', lat: '0.514277', lng: '35.269780' },
  { name: 'Ruiru', lat: '-1.148889', lng: '36.956944' },
  { name: 'Kikuyu', lat: '-1.248056', lng: '36.674444' },
  { name: 'Malindi', lat: '-3.217990', lng: '40.116921' },
  { name: 'Naivasha', lat: '-0.717204', lng: '36.431025' },
  { name: 'Kitui', lat: '-1.367000', lng: '38.010600' },
  { name: 'Machakos', lat: '-1.509510', lng: '37.261787' },
  { name: 'Thika', lat: '-1.033260', lng: '37.069330' },
  { name: 'Athi River', lat: '-1.453143', lng: '36.982437' },
  { name: 'Karuri', lat: '-0.701103', lng: '36.837641' },
]
