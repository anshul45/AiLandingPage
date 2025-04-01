import PromptImg from "../../public/assets/images/home/prompts2.png"
import RealTimeSearch from "../../public/assets/images/home/search.png"
import ImageGeneration from "../../public/assets/images/home/image.png"
import History from "../../public/assets/images/home/history.png"
import ImportContent from "../../public/assets/images/home/import.png"
import Multilingual from "../../public/assets/images/home/multilingual.png"
import Image from "next/image";

const features = [
  {
    title: "Prompt Library",
    description: "Forget about writing your own prompt, use the prompt templates and supercharge your workflow.",
    image: PromptImg
  },
  {
    title: "Real-time web search",
    description: "Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.",
    image: RealTimeSearch
  },
  {
    title: "Image Generation",
    description: "Generate Image instantly from multiple models, create visuals from text descriptions or templates.",
    image: ImageGeneration
  },
  {
    title: "History",
    description: "All of the models can recall previous topic, so you can continue your conversation at any point of time.",
    image: History
  },
  {
    title: "Import content",
    description: "Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.",
    image: ImportContent
  },
  {
    title: "Multilingual support",
    description: "ChatGPT, and Gemini can understand and respond in over 100 languages.",
    image: Multilingual
  }
];

const AdditionalFeatures = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-4xl font-medium md:text-5xl">
          Additional Features
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div className="rounded-md text-center px-9 py-6 h-96 bg-[#252422]">
            <div className="h-[180px]">
            <Image src={feature.image} alt="Image"  className="mx-auto w-full h-full"/>
            </div>
            <h1 className="text-2xl mt-9">{feature.title}</h1>
            <p className="text-sm mt-5">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalFeatures
