import { getProjects } from "../../../sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-4x1 font-black font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Deepak
        </span>
        !
      </h1>

      <p className="mt-3 text-lg text-gray-600">
        Hello everyone! Check out my Projects
      </p>

      <h2 className="mt-6 font-bold text-gray-700 text-3x1">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-3 hover:border border-blue-500 transition ease-in-out duration-500"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
