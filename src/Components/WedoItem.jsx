const WedoItem = ({icon, title, text}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 text-[--site-main-color2]">
      <p className="flex items-center justify-center w-full h-[60px]">{icon}</p>
      <p className="text-[--site-main-color2] font-bold text-[15px] uppercase text-center font-default">{title}</p>
      <p className="text-[15px] font-default text-center">{text}</p>
    </div>
  )
}

export default WedoItem;