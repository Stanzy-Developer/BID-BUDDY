export default function HomePage() {
  const mockUrls = [
    "https://fvslhnpchvxhijfmpobi.supabase.co/storage/v1/object/public/Images/Free%20Images/Inbox_Zoho_Mail.png",
    "https://fvslhnpchvxhijfmpobi.supabase.co/storage/v1/object/public/Images/Free%20Images/Inbox_Zoho_Mail.png",
    "https://fvslhnpchvxhijfmpobi.supabase.co/storage/v1/object/public/Images/Free%20Images/__1_.jpg",
    "https://fvslhnpchvxhijfmpobi.supabase.co/storage/v1/object/public/Images/Free%20Images/__1_.jpg",
  ];
  const mockImages = mockUrls.map((url, idx) => ({
    id: idx + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <img src={url} className="h-48 w-48 "/>
          </div>
        ))}
      </div>
      <h1>Hello world</h1>
    </main>
  );
}
