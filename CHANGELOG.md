1.0.4

- supporting types
- npm run storybook

  1.0.5

- exclude stories from package
- add example signin form
- add components for assembling it
  ├── example
  │   ├── ExampleComponent.stories.tsx
  │   └── ExampleComponent.tsx
  ├── src
  │   ├── components
  │   │   ├── Button
  │   │   ├── EmailControl
  │   │   ├── H1
  │   │   ├── PasswordControl
  │   │   ├── RememberMeControl
  │   │   ├── SignInForm
  │   │   │   ├── SignInCard
  │   │   │   ├── SignInContainer
  │   │   │   ├── SignInFormBox.tsx
  │   │   │   ├── SignUpLink.tsx
  │   │   │   ├── SubmitButton.tsx
  │   │   ├── TextField

// TODO:

mb transform to

├── src
│   ├── AuthForm
│   │   ├── EmailControl
│   │   ├── PasswordControl
│   │   ├── RememberMeControl
│   │   │   ├── SignInCard
│   │   │   ├── SignInContainer
│   │   │   ├── SignInFormBox.tsx
│   │   │   ├── SignUpLink.tsx
│   │   │   ├── SubmitButton.tsx
│   ├── Shared
│   │   ├── components
│   │   │   ├── Button
│   │   │   ├── H1
│   │   │   ├── TextField

1.0.8

- [+] change package.json
- [+] react-hook example
- [+] add tests for SignInForm
  type email
  type password
  click submit
  catch handler
- [+] import SignInForm

- [+] add online demo otmjka.github.io/ui-components
- [+] add data-testid to form controls
