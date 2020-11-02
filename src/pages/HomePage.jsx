import React from 'react';
import { useSelector, } from 'react-redux'
import Slider from '../components/Slider';
import TopBar from '../components/TopBar';

function HomePage(props) {
  const isLogin = useSelector(state => state.user.isAuthentication)
  const username = useSelector(state => state.user.username)
  const items = [
    {
      name: "Avenger 4: End Game",
      region: 'US',
      poster: "",
      actor: ["Justin Bieber", "Robert Downey"],
      categories: ["action","romantic"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure reiciendis delectus distinctio ipsum ratione, commodi, nam harum aperiam esse dolor omnis corporis eos, ipsam accusantium! Reiciendis fuga velit corporis!",
      release_date: "18012019",
      upload_date: "18012018",
      premium: false
    }
  ]
  return (
    <div className="wrapper">
      <TopBar isLogin={isLogin} username={username} />
      <Slider items={items} title="Romantic Movies"/>
    </div>
  );
}

export default HomePage;