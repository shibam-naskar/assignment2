import HeroSection from '../components/hero';
import { JobPosts } from '../components/posts';
import './vac.css'


function Vacancies() {
  return (
    <div className='Main'>
      <HeroSection/>
      <JobPosts/>
    </div>
  );
}

export default Vacancies;
