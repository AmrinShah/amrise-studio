'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { FeaturedProject } from '@/data/featuredProjects'

type FeaturedProjectCardProps = {
  project: FeaturedProject
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border border-gray-200 bg-white shadow-lg">
      <div className="relative h-48 w-full shrink-0 bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} homepage screenshot`}
          fill
          className="object-contain object-center p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm">
            {project.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            {project.status}
          </span>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-purple-600">
          {project.projectType}
        </p>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-600 line-clamp-2">{project.description}</p>

        <div className="mb-3 flex-1">
          {project.features && project.features.length > 0 ? (
            <ul className="space-y-1 text-sm text-gray-700">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          asChild
          className="mt-auto w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 py-2"
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
