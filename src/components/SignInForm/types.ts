export enum FormFieldNames {
  email = 'email',
  password = 'password',
  rememberMe = 'rememberMe',
}

export type SignInFormInput = {
  [FormFieldNames.email]: string
  [FormFieldNames.password]: string
  [FormFieldNames.rememberMe]: boolean
}

export type SignInFormProps = {
  onSubmit: (values: SignInFormInput) => void
}
