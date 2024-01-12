import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/01adv').then(response => response.json()).then(data => setData(data))
    // }, [])
    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}
            /></div>
    )
}

export default Github



//this info loader is used in main file, where it is called in github route, then data is passed to the return objects like image and followers using useloaderData function 
export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}