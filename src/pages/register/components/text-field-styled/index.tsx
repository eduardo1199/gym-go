import { TextField, styled } from '@mui/material'

import colors from 'tailwindcss/colors'

export const TextFieldStyled = styled(TextField)({
  '& label.Mui-focused': {
    color: colors.gray[200],
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '&.Mui-focused fieldset': {
      borderColor: colors.gray[600],
    },
  },
})
