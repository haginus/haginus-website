export interface Technology {
  name: string;
  icon: string;
}

export const technologies = {
  typescript: {
    name: 'TypeScript',
    icon: '/images/technologies/typescript.svg',
  },
  angular: {
    name: 'Angular',
    icon: '/images/technologies/angular.svg',
  },
  react: {
    name: 'React',
    icon: '/images/technologies/react.svg',
  },
  reactNative: {
    name: 'React Native',
    icon: '/images/technologies/react.svg',
  },
  vue: {
    name: 'Vue',
    icon: '/images/technologies/vue.svg',
  },
  node: {
    name: 'Node.js',
    icon: '/images/technologies/node.svg',
  },
  express: {
    name: 'Express',
    icon: '/images/technologies/express.svg',
  },
  nestjs: {
    name: 'NestJS',
    icon: '/images/technologies/nestjs.svg',
  },
  spring: {
    name: 'Java Spring',
    icon: '/images/technologies/spring.svg',
  },
  mysql: {
    name: 'MySQL',
    icon: '/images/technologies/mysql.svg',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: '/images/technologies/postgresql.svg',
  },
  firebase: {
    name: 'Firebase',
    icon: '/images/technologies/firebase.svg',
  },
  docker: {
    name: 'Docker',
    icon: '/images/technologies/docker.svg',
  },
  kubernetes: {
    name: 'Kubernetes',
    icon: '/images/technologies/kubernetes.svg',
  },
  nginx: {
    name: 'Nginx',
    icon: '/images/technologies/nginx.svg',
  },
  git: {
    name: 'Git',
    icon: '/images/technologies/git.svg',
  },
} as const;