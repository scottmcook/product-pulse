type Devices = {
  product: {
    name: string;
  };
  id: string;
}

export default async function Home() {
  const res = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await res.json();
  const listItems = data.devices.map((device: Devices) =>
    <li key={device.id}>{device.product.name}</li>
  );

  return (
    <main>
      <ul>{listItems}</ul>
    </main>
  )
}
