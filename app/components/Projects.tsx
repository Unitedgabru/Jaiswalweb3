import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Discord Community Moderation",
    description:
      "Actively moderated large Discord communities by enforcing rules, handling user reports, resolving conflicts, and maintaining a safe and engaging environment. Worked closely with admins and region moderators to ensure smooth server operations and positive user experience.",
    image: "/projects/discord.png",
  },
  {
    id: 2,
    title: "Region Moderator Responsibilities",
    description:
      "Managed region-specific communities by coordinating with local members, monitoring region-based discussions, organizing community activities, and ensuring adherence to platform guidelines across different time zones.",
    image: "/projects/region.png",
  },
  {
    id: 3,
    title: "Content Creation & Medium Articles",
    description:
      "Write informative and easy-to-understand articles on Medium covering new and existing projects, community growth strategies, Web3, and digital platforms. Focused on simplifying complex topics for a wider audience.",
    link: "https://medium.com/@your-medium-username",
    image: "/projects/medium.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Work
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven
                          ? "lg:ml-[-20%]"
                          : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Articles →
                    </a>
                  )}
                </div>

                {/* Image Content */}
                <div
                  className={`${
                    isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
