import { FC } from 'react';
import { Button } from '../Button';

export const SubmitButton: FC<{ title: string; onSubmit?: () => void }> = (
  props
) => (
  <Button
    data-testid="submit-btn"
    type="submit"
    fullWidth
    variant="contained"
    onClick={props.onSubmit}
  >
    {props.title}
  </Button>
);
