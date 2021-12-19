import houses from '../../houses.js'
import Layout from '../../components/Layout'
import Head from 'next/head'

export default function House2(props) {
  return (
    <Layout
      content={
        <div>
          <Head>
            <title>{props.house.title}</title>
          </Head>
          <img src={props.house.picture} width="100%" alt="Imagen casa" />
          <p>
            {props.house.type} - {props.house.town}
          </p>
          <p>{props.house.title}</p>
        </div>
      }
    />
  )
}

export async function getServerSideProps({ query }) {
    console.log(query)
    const { id } = query
    console.log(id)

    return {
        props: {
            house: houses.filter((house) => house.id === parseInt(id))[0]
        }
    }
}