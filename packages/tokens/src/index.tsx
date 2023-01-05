import { styled } from './styles'

export type ButtonProps = {
  size?: 'small' | 'big'
}

export const Button = styled('button', {
  backgroundColor: '$green300',
  fontFamuily: '$default',
  borderRadius: '$sm',
  border: 'none',
  color: '$white',
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2 $4',
      },
      big: {
        fontSize: 14,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
