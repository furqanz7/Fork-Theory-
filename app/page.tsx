import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#6C4F8C] to-[#FDEBD0] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight shimmer-text">
          Fork Theory
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#6E6E6E] italic">
          Vintage Taste. Royal Quality.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#B7950B] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#9A7D0A] transition">
          Explore Our Products
        </button>
        <div className="mt-12 animate-bounce text-[#B7950B] text-2xl">
          ↓
        </div>
      </main>

      <section id="products" className="relative bg-[#121212] py-24 px-6 md:px-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00000080] to-[#2d2d2d80] z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">
            Our Signature Products
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Vermicelli Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(183,149,11,0.2)]">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-xl mb-4">
                <Image src="/vermicelli.png" alt="Vermicelli" width={400} height={600} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fork Theory Vermicelli</h3>
              <p className="text-sm text-[#eaeaea] mt-2">
                Fine, firm, and fast-cooking — perfect for classic comfort dishes.
              </p>
            </div>

            {/* Noodles Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(183,149,11,0.2)]">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-xl mb-4">
                <Image src="/Noodles.png" alt="Noodles" width={400} height={600} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fork Theory Noodles</h3>
              <p className="text-sm text-[#eaeaea] mt-2">
                Non-sticky, springy noodles with authentic flavor and quick prep.
              </p>
            </div>

            {/* Aftermint Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(183,149,11,0.2)]">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-xl mb-4">
                <Image src="/Aftermint.png" alt="Aftermint" width={400} height={600} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fork Theory Aftermint</h3>
              <p className="text-sm text-[#eaeaea] mt-2">
                A refreshing end to every meal. Subtle, sweet, and timeless.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <a
              href="https://wa.me/918778678267?text=I%20am%20interested%20in%20becoming%20a%20Fork%20Theory%20partner"
              target="_blank"
              className="inline-block bg-[#B7950B] text-white px-6 py-3 rounded-full hover:bg-[#9A7D0A] transition"
            >
              Become a Fork Theory Partner
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F8F5F2] py-24 px-6 md:px-24 text-[#2F2F2F]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Built for Everyday Elegance
            </h2>
            <p className="text-base md:text-lg text-[#5E5E5E] leading-relaxed">
              At Fork Theory, we believe in crafting essentials that carry both comfort and charm.
              Our recipes are rooted in heritage, but refined with modern precision — offering consistency, quality, and a vintage soul in every batch.
            </p>

            <blockquote className="mt-8 text-[#9A7D0A] italic border-l-4 border-[#B7950B] pl-4 text-sm md:text-base">
              &quot;Food is not just cooked. It&apos;s constructed.&quot; – Fork Theory
            </blockquote>
          </div>

          {/* Image or Visual */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/philosophy.png"
              alt="Fork Theory philosophy"
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#F2F0ED] text-[#5E5E5E] py-12 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Left: Logo + tagline */}
          <div>
            <h3 className="text-2xl font-serif text-[#5C5470]">Fork Theory</h3>
            <p className="mt-2 text-sm italic">Vintage Taste. Royal Quality.</p>
          </div>

          {/* Middle: Navigation */}
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="hover:text-[#B7950B] transition">Home</a>
            <a href="#products" className="hover:text-[#B7950B] transition">Products</a>
            <a href="#about" className="hover:text-[#B7950B] transition">About</a>
            <a href="https://wa.me/918778678267" target="_blank" className="hover:text-[#B7950B] transition">Contact</a>
          </div>

          {/* Right: Contact or CTA */}
          <div className="text-sm">
            <p className="mb-2">📍 Tamil Nadu, India</p>
            <p>📞 +91 8778678267</p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#999]">
          © {new Date().getFullYear()} Fork Theory. All rights reserved.
        </div>
      </footer>
    </>
  );
}