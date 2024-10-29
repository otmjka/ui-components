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
