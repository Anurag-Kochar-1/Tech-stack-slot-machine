const StackOptions = {
  frontend: [
    { id: 'reactJs', name: 'React.Js' },
    { id: 'svelteJs', name: 'Svelte.Js' },
    { id: 'angularJs', name: 'Angular.Js' },
    { id: 'vueJs', name: 'Vue.Js' }
  ],
  backend: [
    { id: 'nodeJs', name: 'Node.js' },
    { id: 'django', name: 'Django' },
    { id: 'springboot', name: 'Spring Boot' }
  ],
  styling: [
    { id: 'antd', name: 'Ant design' },
    { id: 'si', name: 'Shadcn UI' },
    { id: 'mui', name: 'Material-UI' }
  ],
  deployment: [
    { id: 'vercel', name: 'Vercel' },
    { id: 'aws', name: 'AWS' },
    { id: 'azure', name: 'Azure' }
  ],
  database: [
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'postgres', name: 'PostgreSQL' },
    { id: 'mysql', name: 'MySQL' }
  ]
};

export default StackOptions;