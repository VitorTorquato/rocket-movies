import { Container } from "./styles";


export function Button({title , ...rest}){
        return(
            <Container {...rest}
                type="button"
            >
                {title}
            </Container>

        )

}