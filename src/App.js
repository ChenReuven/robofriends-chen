import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots as allRobots} from "./robots";
import './App.css';
import 'tachyons';
import {useEffect, useState} from "react";

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
    return (
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChanged}/>
            <CardList robots={robots}/>
        </div>
    )
}

export default App;