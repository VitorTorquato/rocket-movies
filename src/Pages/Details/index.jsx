import { Container , Content } from "./styles"

import { FiArrowLeft ,  FiClock  } from "react-icons/fi";

import { Header } from "../../components/header"
import { TextButton } from "../../components/textButton"


export function Details() {
  

  return (
    <Container>
        <Header/>
         <main>
            <Content>
                <div>
                    <TextButton icon={FiArrowLeft} title="Voltar"/>
                    <h1>Star Wars return of jedi </h1>
                    <span><img src="https://github.com/vitortorquato.png" alt="foto de vitor torquato"/> Por Vitor Torquato <FiClock/> 25/03/2024 ás 08:00</span>

                </div>

      

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora dolorem obcaecati repellendus asperiores non molestias voluptatem sapiente aliquid! Iusto possimus earum culpa itaque tenetur debitis repudiandae velit saepe eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque dolor repellat, officiis amet debitis veritatis nihil architecto? Nemo suscipit deleniti dolorum rem a dolores inventore delectus nihil tenetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati maxime reprehenderit ratione labore cum explicabo ab? Magni minima LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora dolorem obcaecati repellendus asperiores non molestias voluptatem sapiente aliquid! Iusto possimus earum culpa itaque tenetur debitis repudiandae velit saepe eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque dolor repellat, officiis amet debitis veritatis nihil architecto? Nemo suscipit deleniti dolorum rem a dolores inventore delectus nihil tenetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati maxime reprehenderit ratione labore cum explicabo ab? Magni minima LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora dolorem obcaecati repellendus asperiores non molestias voluptatem sapiente aliquid! Iusto possimus earum culpa itaque tenetur debitis repudiandae velit saepe eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo itaque dolor repellat, officiis amet debitis veritatis nihil architecto? Nemo suscipit deleniti dolorum rem a dolores inventore delectus nihil tenetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati maxime reprehenderit ratione labore cum explicabo ab? Magni minima Lorem</p>


            </Content>
         </main>

    </Container>
  )
}

