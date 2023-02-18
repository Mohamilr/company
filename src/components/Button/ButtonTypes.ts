export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}
