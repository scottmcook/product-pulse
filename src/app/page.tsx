type Devices = {
  devices: object;
}

async function getData() {
  
}

export default async function Home() {
  const res = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data:Devices = await res.json();
  console.log(data.devices)
  return (
    <main>
      <div>{data.devices}</div>
    </main>
  )
}
