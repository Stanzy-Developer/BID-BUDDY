import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map(({ id, name, url }) => (
          <div className="p-4" key={id}>
            <img src={url} className="h-48 w-48 " />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
