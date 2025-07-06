// Base types for the application
export type Theme = 'light' | 'dark' | 'auto'

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
  bio: string
}

export interface Skill {
  name: string
  category: string
  level?: number
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  skills?: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  category: string
  link?: string
  github?: string
  image?: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  grade?: string
  thesis?: string
  description: string
}

export interface Certification {
  title: string
  description: string
  skills?: string[]
  location?: string
  special?: boolean
  credentialId?: string
  verifyLink?: string
}

export interface CertificationProvider {
  name: string
  certifications: Certification[]
}

export interface Value {
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SeoMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}
