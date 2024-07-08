interface IProps {
  src: string;
}
function IconImg({ src }: IProps) {
  return <img src={src} className="w-5 h-5" alt="icon" />;
}

export default IconImg;
