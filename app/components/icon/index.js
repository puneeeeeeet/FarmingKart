const SIZES = {
    extraSmall:14,
    lessSmall:16,
    small: 20,
    medium: 24,
    large: 32,
  };
  
  const COLORS = {
    white: "text-white",
    
  };
  
  const Icon = ({ icon: IconComponent, size='small', color='white', onClick, className }) => {
    return (
      <IconComponent
        height={SIZES[size]}
        width={SIZES[size]}
        className={className}
        onClick={onClick}
        color={COLORS[color]}
      ></IconComponent>
    );
  };
  export {Icon};