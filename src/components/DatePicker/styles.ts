import { styled } from '@mui/material/styles'

import { DatePicker } from '@mui/x-date-pickers'

export const StyledDatePicker = styled(DatePicker)({
  '.MuiInputBase-root': {
    border: '1px solid #9BB1D6',
    color: '#3D4268',
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
  },

  '.MuiInputLabel-root': {
    color: '#9BB1D6',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.7,
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
  },
})
