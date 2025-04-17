import FoxLogo from "../public/sly-fox-logo-notext.png"
import Image from "next/image";

interface ServerCardProps {
    id: string;
    label: string;
    status: string;
  }
  
  const ServerCard: React.FC<ServerCardProps> = ({ id, label, status }) => {
    return (
      
      <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
      <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
        <div className="sm:order-last sm:shrink-0">
          <Image
            width={72} 
            height={72}
            priority={true}
            alt="Sly Fox Logo"
            src={FoxLogo}
            className="size-16 rounded-full object-cover sm:size-[72px]"
          />
        </div>
    
        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg font-medium text-pretty text-gray-900">
            {id}
          </h3>
    
          <p className="mt-1 text-sm text-gray-700">{label}</p>
        </div>
      </div>
    </a>
      
    );
  };
  
  export default ServerCard;