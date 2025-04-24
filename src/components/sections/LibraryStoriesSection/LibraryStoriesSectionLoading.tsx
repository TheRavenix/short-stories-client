import { Skeleton } from "@/components/Skeleton";

interface Props {}

const LibraryStoriesSectionLoading: React.FC<Props> = () => {
  return <Skeleton type="card" count={5} height="250px" />;
};

export { LibraryStoriesSectionLoading };
