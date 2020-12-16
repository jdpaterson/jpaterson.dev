import { deep } from '@theme-ui/presets'
import { merge } from 'theme-ui'

export default merge(deep, {
  breakpoints: [
    '40em', '56em', '64em',
  ],
  layout: {
    container: {
      maxWidth: ['25em', '35em', '50em', '60em']
    }
  },
  styles: {
    a: {
      textDecoration: 'none'
    }
  }

})