import './Button.css';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
};


function Button({ type = 'button', text, onClick }: ButtonProps) {
  return (
    <button className='btn' type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
