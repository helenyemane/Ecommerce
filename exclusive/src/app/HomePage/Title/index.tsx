interface TitleProps {
    title: string;
  }
  
  const Title = ({ title }: TitleProps) => {
    return <h2 className="text-3xl font-poppins w-3/4 m-auto">{title}</h2>;
  };
  
  export default Title;