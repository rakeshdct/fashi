import DealsOfTheWeek from '../components/home/DealsOfTheWeek';
import Fromtheblog from '../components/home/Fromtheblog';
import InstagramPhoto from '../components/home/InstagramPhoto';
import Mwk from '../components/home/Mwk';


export default function Home() {
  return (
    <div>
      <Mwk/>
      <DealsOfTheWeek/>
      <InstagramPhoto/> 
      <Fromtheblog/>
    </div>
  )
}