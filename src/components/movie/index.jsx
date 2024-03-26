import { Container } from "./styles";
import { Rating } from "../rating";

export function Movie({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
                <Rating grade={data.rating} isBigSize={false}/>
             <p>{data.description}</p> 

        </Container>

    )

}