import { notFound } from 'next/navigation';
import projects from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mahmudul Hasan Jony`,
      description: project.description,
      images: [
        {
          url: project.image.src,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const imageProps = {
    src: project.image.src || project.image,
    width: project.image.width,
    height: project.image.height,
  };

  return <ProjectDetail project={project} imageProps={imageProps} />;
}
