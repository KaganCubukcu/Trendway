import HomeContainer from "@/containers/home";

export default function Home({searchParams}: {searchParams: {page?: string}}) {
  return (
    <div>
      <HomeContainer searchParams={searchParams} />
    </div>
  );
}
