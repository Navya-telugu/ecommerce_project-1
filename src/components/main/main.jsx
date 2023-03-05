import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";

const Main = ()=> {
    const [adventure, setAdventure] = useState([]);
    const [simulation, setSimulation] = useState([]);
    const [boardgame, setBoardgame] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/adventures?populate=*').then((adventure)=> {
            setAdventure(adventure.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/simulations?populate=*').then((simulation)=> {
            setSimulation(simulation.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/boardgames?populate=*').then((boardgame)=> {
            setBoardgame(boardgame.data.data)
        }).catch(()=> {

        }).finally(()=> {
        });    
    }, [])
    return (
        <>
            <Header/>
            <section>
                <article><h2>Adventure</h2></article>
                {adventure.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article><h2>simulation</h2></article>
                {simulation.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
                <article><h2>Boardgame</h2></article>
                {boardgame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
            </section>
        </>
    )
}
export default Main