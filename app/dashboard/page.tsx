import ServerCard from "@/components/ServerCard";
import { getInstances } from "@/lib/fetch_vultr";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

interface Instance {
    id: string;
    main_ip: string;
    label: string;
    status: string;
}

const InstancePage = async () => {

    const user = await currentUser();

    if (!user) return <div>Please log in to view your instances.</div>;

    const instanceData = await getInstances()
    


    // Assuming the API response contains an array of instances
    const instances: Instance[] = instanceData.instances || [];

    return (
      <div className="container mx-auto px-4 mt-5">
        <h1 className="text-2xl font-bold mb-4">Welcome {user?.firstName}!</h1>
        <h1 className="my-5">Here are your server instances:</h1>
      <ul>
        {instances.length > 0 ? (
          instances.map((instance) => (
            <ServerCard
              key={instance.id}
              id={instance.id}
              main_ip={instance.main_ip}
              label={instance.label}
              status={instance.status}
            />
          ))
        ) : (
          <li>No instances available</li>
        )}
      </ul>
      <SignOutButton>
        <button className="border-3 black p-2 w-1/4 my-5 shadow-[4px_4px_0_0_#000000] border-black border-2 text-base bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
          Sign Out
        </button>
      </SignOutButton>
      </div>
    );
}

export default InstancePage;