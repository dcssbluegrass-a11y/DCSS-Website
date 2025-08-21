import groupPhotoPath from "@assets/Copy of sdf-21_1755456309036.jpg";
import FollowUsSection from "@/components/FollowUsSection";

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-dark mb-6">
              About + Press
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Formed in 2012 in Harford County, Maryland, Deer Creek Sharp Shooters (DCSS) are six friends united by their shared passion for bluegrass and a vision to explore the boundaries of acoustic music. Since relocating to Steamboat Springs and Denver, Colorado in 2016, the band has truly hit its stride, blending traditional bluegrass roots with a playful, innovative spirit.
              </p>
              
              <p className="text-lg leading-relaxed">
                Known for their high-energy performances and infectious camaraderie, DCSS creates a show experience that's as much about connection as it is about music. From blistering, fast-paced bluegrass jams to quirky, crowd-pleasing tunes about cats, their setlists are as dynamic as their personalities. Drawing inspiration from bluegrass legends and weaving in their own unique twist, DCSS offers a sound that's equal parts tradition and fresh creativity.
              </p>
              
              <p className="text-lg leading-relaxed">
                Named "Best New Bluegrass Band" by Denver Westword in 2022, DCSS has performed at prestigious festivals such as WinterWonderGrass Steamboat, Palisade Bluegrass and Roots, The Ramble Festival, and Tico Time Bluegrass Festival. In 2023, they released their debut album, Crik, a collection of original songs that showcase their musicianship, storytelling, and sense of fun.
              </p>

              <p className="text-lg leading-relaxed">
                Whether you're a die-hard bluegrass fan or just looking for a good time, DCSS promise a performance that will leave you smiling, clapping, and maybe even singing along. Find their music on all streaming platforms, follow them on Instagram and Facebook (@deercreeksharpshooters), and <a href="http://eepurl.com/jlJh8w" target="_blank" rel="noopener noreferrer" className="text-dcss-orange hover:underline font-semibold">join their newsletter</a> to stay up to date with shows, new releases, and more!
              </p>

              {/* Press Quote */}
              <div className="bg-dcss-dark text-dcss-light p-6 rounded-xl mt-8">
                <blockquote className="text-2xl font-heading font-bold mb-4">
                  "Best New Bluegrass Band"
                </blockquote>
                <cite className="text-dcss-orange font-heading font-semibold">
                  — Denver Westword, 2022
                </cite>
                <div className="mt-4">
                  <a 
                    href="https://www.westword.com/best-of/2022/music-and-venues/best-new-bluegrass-band-13811607" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-orange hover:text-orange-400 underline"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
            
            {/* Band Photo */}
            <div className="flex justify-center">
              <img 
                src={groupPhotoPath} 
                alt="DCSS green room group photo" 
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
