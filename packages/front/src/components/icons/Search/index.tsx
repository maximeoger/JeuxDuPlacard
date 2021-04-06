
interface IProps {
  color?: string;
}

export const Search = ({color="none"}: IProps) => (
  <svg 
    width="16" 
    height="17" 
    viewBox="0 0 16 17" 
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.7797 14.333L12.6644 11.2177C12.5238 11.0771 12.3332 10.999 12.1332 10.999H11.6239C12.4863 9.89596 12.9987 8.50859 12.9987 6.99937C12.9987 3.40909 10.0896 0.5 6.49937 0.5C2.90909 0.5 0 3.40909 0 6.99937C0 10.5896 2.90909 13.4987 6.49937 13.4987C8.00859 13.4987 9.39596 12.9863 10.499 12.1239V12.6332C10.499 12.8332 10.5771 13.0238 10.7177 13.1644L13.833 16.2797C14.1267 16.5734 14.6017 16.5734 14.8923 16.2797L15.7766 15.3954C16.0703 15.1017 16.0703 14.6267 15.7797 14.333ZM6.49937 10.999C4.29021 10.999 2.49976 9.21165 2.49976 6.99937C2.49976 4.79021 4.28708 2.99976 6.49937 2.99976C8.70852 2.99976 10.499 4.78708 10.499 6.99937C10.499 9.20852 8.71165 10.999 6.49937 10.999Z" fill={color}/>
</svg>

  

);

