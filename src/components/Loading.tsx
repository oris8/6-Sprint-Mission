import Image from "next/image";

const Loading = () => {
  return (
    <div className="flexcenter h-screen w-full flex-col">
      <div className="relative h-48 w-48">
        <Image
          className="animate-spin"
          src="/images/ic_spinner.svg"
          alt="Loading..."
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="text-18 mt-8 font-medium text-gray-600">Loading...</div>
    </div>
  );
};

export default Loading;
