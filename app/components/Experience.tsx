import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Discord Server Moderator",
    description:
      "Moderated large Discord communities by enforcing rules, managing member issues, handling reports, preventing spam, and maintaining a positive and safe environment.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Region Moderator",
    description:
      "Handled region-specific communities, supported local members, resolved conflicts, coordinated with global moderators, and ensured smooth communication across regions.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Community Management",
    description:
      "Engaged with community members, organized discussions, improved user retention, and helped grow healthy and active online communities.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Content Creator & Writer",
    description:
      "Created content and wrote Medium articles about new and existing projects, community growth strategies, platform updates, and digital ecosystems.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-2 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-all flex gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
