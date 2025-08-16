interface SubTitleProps {
    label: string;
  }
  
  const SubTitle = ({ label }: SubTitleProps) => {
    return (
      <div className="flex items-center gap-5 mt-25 w-3/4 m-auto">
        <div className="w-4 h-10 bg-pink-900 rounded-sm"></div>
        <span className="font-poppins text-pink-900 text-sm font-medium">{label}</span>
      </div>
    );
  };
  
  export default SubTitle;