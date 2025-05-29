import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[min(90%,1440px)] mx-auto sm:p-8">
      <Header />

      <main className="relative">
        <div className="fixed top-[5%] right-[15%] h-[90vh] w-full max-w-2xl pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 blur-3xl opacity-80"
          >
            <path
              fill="#4B008266"
              d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
              transform="translate(130 70) scale(1.2)"
            />
          </svg>{" "}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 blur-3xl opacity-80"
          >
            <path
              fill="#00FFFF77"
              d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
              transform="translate(110 120) scale(1.1)"
            />
          </svg>
        </div>
      </main>
    </div>
  );
}
