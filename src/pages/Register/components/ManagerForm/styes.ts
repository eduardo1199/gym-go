import { styled } from '@mui/material/styles'

import { DatePicker } from '@mui/x-date-pickers'

export const StyledDatePicker = styled(DatePicker)({
  color: '#3D4268',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#3D4268',
  border: '1px solid',
  backgroundColor: 'transparent',
  fontSize: 12,

  '&:focus': {
    borderWidth: 1,
    borderColor: '#3D4268',
  },
})
