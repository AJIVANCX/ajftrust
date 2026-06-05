type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">
        Project: {slug}
      </h1>
    </div>
  );
}