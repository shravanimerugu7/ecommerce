import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";

const Main = ()=> {
    const [anotherGame, setAnotherGame] = useState([]);
    const [videoGame, setVideoGame] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/another-games').then((anotherGame)=> {
            setAnotherGame(anotherGame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/video-games').then((videoGame)=> {
            setVideoGame(videoGame.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section>
                <article>videoGame</article>
                {videoGame.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article>another Game</article>
                {anotherGame.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main
