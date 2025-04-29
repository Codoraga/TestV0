import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-pastel-pink/30 to-pastel-blue/30 rounded-b-[3rem] py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Hello, I'm <span className="text-primary-foreground">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Creating playful digital experiences with a touch of whimsy
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="primary-button">
              View My Work
            </Link>
            <Link href="/contact" className="secondary-button">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Cute character illustration"
              width={320}
              height={320}
              className="rounded-full bg-white p-2 border-4 border-primary shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center animate-bounce-slow shadow-md">
              <span className="text-secondary-foreground font-bold">Hi!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pastel-yellow rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-pastel-green rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-pastel-purple rounded-full opacity-60 animate-pulse"></div>
    </div>
  )
}
