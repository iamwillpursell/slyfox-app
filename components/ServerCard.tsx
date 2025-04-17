interface ServerCardProps {
  id: string;
  main_ip: string;
  label: string;
  status: string;
}

const ServerCard: React.FC<ServerCardProps> = ({ id, main_ip, label, status }) => {
  return (
  <div key={id} className="w-md text-black grid grid-flow-col grid-rows-3 gap-4 my-3 shadow-[4px_4px_0_0_#000000] border-black rounded-lg border-2 py-4 text-base bg-white p-5 hover:scale-105 transition-transform duration-300 ease-in-out animate-[wiggle_1s_ease-in-out_infinite]">
    <div className="row-span-3">{main_ip}</div>
    <div className="col-span-2">{label}</div>
    <div className="col-span-2 row-span-2">{status}</div>
  </div>
  );
};

export default ServerCard;