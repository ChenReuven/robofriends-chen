import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots as allRobots} from "../robots";
import './App.css';
import 'tachyons';
import {useEffect, useState} from "react";
import Scroll from "../components/Scroll";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const onSearchChanged = (query = '') => {
        setSearchField(query);
        console.log(query);
        const newRobots = query !== '' ? robots.filter(robot => robot.name.toLowerCase().includes(searchField)) : allRobots;
        setRobots(newRobots);
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setRobots(data));
    }, [])

    if(!robots.length) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChanged}/>
            <Scroll>
                <CardList robots={robots}/>
            </Scroll>
        </div>
    )
}

export default App;