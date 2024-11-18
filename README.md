# ui-components

react, material ui, storybook, ui components library

Check the online demo [Demo](https://otmjka.github.io/ui-components)

```bash
# tree -d -L 5 -I 'node_modules' -I 'dist' -I 'storybook-static'
.
├── example
│   └── AppTheme
│       └── customizations
└── src
    └── components
        ├── Button
        ├── EmailControl
        ├── H1
        ├── PasswordControl
        ├── RememberMeControl
        ├── SignInForm
        │   ├── SignInCard
        │   └── SignInContainer
        └── TextField
```

# install

```bash
npm i otmjka-ui-components
```

```tsx
import { FC } from 'react'
import { SignInForm, SignInFormInput } from 'otmjka-ui-components'

const SignInPage: FC = () => (
  <SignInForm onSubmit={(values: SignInFormInput) => console.log(values)} />
)

export default SignInPage
```
