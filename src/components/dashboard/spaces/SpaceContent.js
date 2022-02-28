import React, { useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@mui/styles";


import AddEspace from "./AddEspace";
import SpaceToolBar from "./SpaceToolBar";
import SpaceCard from "./SpaceCard";
import LoadingAnimation from "../../LoadingAnimation"
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    color: "#0554F2",
    backgroundColor: "#F1F8FF",
  },
});


export const SpaceContent = () => {

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const [spacesData,setSpacesData] = useState([])

  useEffect(()=>{

    // récupérer les datas en ajax
    //les méthodes http sont : GET, POST, PATCH, PUT ,DELETE, (OPTIONS) "crud"
    // const xhttp = new XMLHttpRequest()

    // xhttp.onreadystatechange = function () { // function exc à chaque changhement de l'état de notre requete
    //   //les états sont les suivant et correspondent au codes ci dessous:
    //   //0: non initialisée
    //   //1:connection établie avec le serveur
    //   //2:request reçue par le serveur
    //   //3:traitement de la req par le serveur
    //   //4:fin de traitement de la req et response reçu

    //   console.log("state:",this.readyState);

    //   //vérif de l'état de la req ainsi que du status de la reponse serveur
    //   if(this.readyState === 4 && this.status === 200) {
    //     console.log(this.responseText);
    //   }

    // }

    // xhttp.open('GET','https://jsonplaceholder.typicode.com/posts')
    // xhttp.send()

    

    // fetch('https://jsonplaceholder.typicode.com/posts',initConfig)
    // .then((response) => {
    //   if(response.ok) {
    //     return response.json()
    //   } else {
    //     throw new Error() ;
    //   }
    // })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

    getData()

  },[])

  const getData = async () => {
    const initConfig = {
      method:'GET'
    }
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts',initConfig)
      let result = await response.json()   
      let data = result.slice(0,3)
      setTimeout(()=>{
        setSpacesData(data)
        setIsLoading(false)
      },2000)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="espace">
      <SpaceToolBar/>
        <LoadingAnimation isLoading={isLoading} type="linear" />
        <Grid container spacing={2}>

          {
            spacesData.map((space)=>(
              <Grid item lg={3} key={space.id}>
                <SpaceCard imgUrl="#" title={space.title} description={space.body} />
              </Grid>
            ))
          }
          <Grid item lg={3}>
            <AddEspace/>
          </Grid>
        </Grid>

    </div>
  );
};
