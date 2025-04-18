export async function getInstances() {
    try {
        const res = await fetch('https://api.vultr.com/v2/instances', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_VULTR_API_KEY}`,
          },
          cache: 'force-cache', // Ensures the data is fetched on every request
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const data = await res.json();

        return data;
        
    } catch (error) {
        console.error('Error Fetching Instances:', error);
        throw error;
    }
}

export async function getInstanceDetails(instanceId: string) {
    try {
        const res = await fetch(`https://api.vultr.com/v2/instances/${instanceId}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_VULTR_API_KEY}`,
          },
          cache: 'force-cache', // Ensures the data is fetched on every request
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error Fetching Instance Details:', error);
        throw error;
    }
}

