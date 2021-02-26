
interface IProps {
  color?: string;
};

const Facebook = ({color="none"}: IProps) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M23.25 11.625C23.25 5.20312 18.0469 0 11.625 0C5.20312 0 0 5.20312 0 11.625C0 17.4272 4.25109 22.2366 9.80859 23.1094V14.9855H6.85547V11.625H9.80859V9.06375C9.80859 6.15047 11.543 4.54125 14.1994 4.54125C15.4716 4.54125 16.8019 4.76813 16.8019 4.76813V7.6275H15.3356C13.8919 7.6275 13.4414 8.52375 13.4414 9.44297V11.625H16.6655L16.1498 14.9855H13.4414V23.1094C18.9989 22.2366 23.25 17.4272 23.25 11.625Z" 
      fill={color}
    />
  </svg>
);

export default Facebook;