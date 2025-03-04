type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'IntegraFácil',
    title: 'Backend Developer & DevOps',
    start: '2025',
    end: 'Present',
    link: 'https://if.ind.br/',
    id: 'work1',
  },
  {
    company: 'Signus Indústria Óptica',
    title: 'Backend Developer',
    start: '2024',
    end: '2024',
    link: 'https://loja.signus.ind.br/',
    id: 'work2',
  },
  {
    company: 'Ecritel',
    title: 'SRE & DevOps',
    start: '2017',
    end: '2023',
    link: 'https://www.ecritel.com.br/',
    id: 'work3',
  },

  {
    company: 'Escola Saga',
    title: 'Teacher of TI & CGI',
    start: '2014',
    end: '2017',
    link: 'https://www.saga.com.br/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Versionamento de código com Git & Github',
    description: 'Tudo que é necessário saber para fazer o uso das ferramentas',
    link: '/blog/versionamento-de-codigo-com-git-e-github',
    uid: 'post1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/oalvesxp',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/oalvesxp',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oalvesxp',
  },
]

export const EMAIL = 'oalves.neto@outlook.com'
