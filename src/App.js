import Header from "./components/Header/Header";
import Project from "./components/Project/Project";

import './App.css';
import Hero from "./components/Hero/Hero";
import { Card } from "@material-ui/core";

const projects = [
  {
    title: 'Trello',
    imageUrl: 'https://github.com/satyavamsi/TrelloClone/blob/master/public/sample.png?raw=true',
    intro: `Trello Clone built using React.js, Redux, Material-UI and React-Beautiful-DND.
You can edit, delete and reorder either the card or the list.`,
    demoLink: 'https://trellosvamsi.web.app/'
  },
  {
    title: 'Whatsapp',
    imageUrl: 'https://github.com/satyavamsi/Whatsapp/blob/master/public/sample.png?raw=true',
    intro: `This project was built using React.js as frontend with firebase as backend.
    The design is inspired from Whatsapp.`,
    demoLink: 'https://whatsapp-satya.web.app/'
  },
  {
    title: 'Google',
    imageUrl: 'https://github.com/satyavamsi/google/blob/master/public/sample.png?raw=true',
    intro: `Google seach built using React.js and Google Search API`,
    demoLink: 'https://gooogle-svamsi.web.app/'
  },
  {
    title: 'Netflix',
    imageUrl: 'https://github.com/satyavamsi/NetflixClone/blob/master/public/sample.png?raw=true',
    intro: `This project is a clone of Netflix, built using React.js and TMDB API's.
On clicking any tile, the respective trailer will be played.`,
    demoLink: 'https://netflix-clone-b1817.web.app/'
  },
  {
    title: 'Slack',
    imageUrl: 'https://github.com/satyavamsi/ChatApp/blob/master/public/sample.png?raw=true',
    intro: `This project was built using React.js as frontend with firebase as backend.
    The design is inspired from Slack.`,
    demoLink: 'https://chat-app-17bf8.web.app/'
  },

]


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="projects">
        <Card style={{ backgroundColor: 'rgb(255 255 255)', marginTop: '-20vh', marginLeft: 40, marginRight: 40, borderTopLeftRadius: 16, borderTopRightRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="projects__title">Some of my recent projects</p>
          {projects.map((project, i) => <Project key={`project__${i}`} {...project} direction={i % 2 == 0 ? 'ltr' : 'rtl'} />)}
        </Card>
      </div>
    </div>
  );
}

export default App;
