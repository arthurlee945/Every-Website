import Head from 'next/head';
import Tester from '../components/Tester'
import { useEffect, Fragment } from "react";
import { fetchAPI } from "../util/getAPI";
import { getStrapiMedia } from "../util/media";
import { getComponents } from '../util/getComponents';


export default function Home({homepageProps}) {
  const components = getComponents(homepageProps);
  return (
    <Fragment>
      {components.map((Comp, i)=>(<Comp key = {i} hpProps = {homepageProps.data.attributes}/>))}
      <Tester/>
    </Fragment>
  )
}

export async function getStaticProps(ctx){
  const homepageProps = await fetchAPI('/homepage', {
    populate:{
      "HomepageHero":{
        populate:"*",
      },
    }
  })

  return{
    props:{
      homepageProps
    }
  }
}