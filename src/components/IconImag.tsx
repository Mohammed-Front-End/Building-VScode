interface IProps {
  src: string;
}
function IconImg({ src }: IProps) {
  console.log(src);

  return <img src={src} className="w-5 h-5" alt="icon" />;
}

export default IconImg;
