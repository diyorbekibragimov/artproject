import Image from "next/image";

type SensitiveProps = {
  nextUrl: string;
};

const Sensitive: React.FC<SensitiveProps> = ({ nextUrl }) => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-center">
        <div className="w-full text-center flex flex-col items-center justify-center p-2 md:p-10">
          <div className="text-white text-normal font-poppins mt-4 text-center flex flex-col justify-center items-center">
            <Image
              src="/sensitive.jpg"
              alt="Sensitive"
              width={400}
              height={400}
            />
            <h3 className="text-white w-full text-2xl font-semibold mt-4 text-center upperase">
              Sensitivie Content
            </h3>
            <p>
              Below will contain some graphic images, click on{" "}
              <a href={nextUrl} className="underline">next</a> to go to the next artist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensitive;
