import Image from "next/image";
import { getProject } from "../../../../../sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";


type Props = {
  params: { project: string };
}; // use this if you have params

export default async function project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div >
      <header className="flex items-center justify-between">
        <h3 className="font-extrabold drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
          {project.name}
        </h3>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold p-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition ease-in-out duration-300"
        >
          View Project
        </a>
      </header>

      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* images go here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-x1"
      />
    </div>
  );
}
