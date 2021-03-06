import Link from 'next/link'

export default function House(props) {
    return (
      <Link href="/houses/[id]" as={'/houses/' + props.id}>
        <a>
          <img src={props.picture} width="100%" height="100%" alt="Imagen casa" />
          <p> 
            {props.type} - {props.town} 
          </p>
          <p> 
            {props.title} 
          </p>
        </a>
    </Link>
    )
}