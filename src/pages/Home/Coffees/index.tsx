import ExpressoAmericanoImg from '../../../assets/CoffeeImages/americano.png'
import ArabeImg from '../../../assets/CoffeeImages/arabe.png'
import CafeComLeiteImg from '../../../assets/CoffeeImages/cafe_com_leite.png'
import ExpressoGeladoImg from '../../../assets/CoffeeImages/cafe_gelado.png'
import CappucinoImg from '../../../assets/CoffeeImages/capuccino.png'
import ChocolateQuenteImg from '../../../assets/CoffeeImages/chocolate_quente.png'
import CubanoImg from '../../../assets/CoffeeImages/cubano.png'
import ExpressoImg from '../../../assets/CoffeeImages/expresso.png'
import ExpressoCremosoImg from '../../../assets/CoffeeImages/expresso_cremoso.png'
import HavaianoImg from '../../../assets/CoffeeImages/havaiano.png'
import IrlandesImg from '../../../assets/CoffeeImages/irlandes.png'
import LatteImg from '../../../assets/CoffeeImages/latte.png'
import MacchiatoImg from '../../../assets/CoffeeImages/macchiato.png'
import MocaccinoImg from '../../../assets/CoffeeImages/mochaccino.png'

import { CoffeeCard } from './components/CoffeeCard'
import { CoffeesContainer, MainContainer } from './styled'

export default function Coffees() {
  return (
    <MainContainer>
      <h2>Nossos Cafés</h2>
      <CoffeesContainer>
        <CoffeeCard
          coffeeName="Expresso Tradicional"
          coffeeDescription="O tradicional café feito com água quente e grãos moídos"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ExpressoImg}
          coffeeTags={['tradicional']}
        />
        <CoffeeCard
          coffeeName="Expresso Americano"
          coffeeDescription="Expresso diluído, menos intenso que o tradicional"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ExpressoAmericanoImg}
          coffeeTags={['tradicional']}
        />
        <CoffeeCard
          coffeeName="Expresso Cremoso"
          coffeeDescription="Café expresso tradicional com espuma cremosa"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ExpressoCremosoImg}
          coffeeTags={['tradicional']}
        />
        <CoffeeCard
          coffeeName="Expresso Gelado"
          coffeeDescription="Bebida preparada com café expresso e cubos de gelo"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ExpressoGeladoImg}
          coffeeTags={['tradicional', 'gelado']}
        />
        <CoffeeCard
          coffeeName="Café com Leite"
          coffeeDescription="Meio a meio de expresso tradicional com leite vaporizado"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={CafeComLeiteImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Latte"
          coffeeDescription="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={LatteImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Capuccino"
          coffeeDescription="Bebida com canela feita de doses iguais de café, leite e espuma"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={CappucinoImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Macchiato"
          coffeeDescription="Café expresso misturado com um pouco de leite quente e espuma"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={MacchiatoImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Mocaccino"
          coffeeDescription="Café expresso com calda de chocolate, pouco leite e espuma"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={MocaccinoImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Chocolate Quente"
          coffeeDescription="Bebida feita com chocolate dissolvido no leite quente e café"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ChocolateQuenteImg}
          coffeeTags={['tradicional', 'com leite']}
        />
        <CoffeeCard
          coffeeName="Cubano"
          coffeeDescription="Drink gelado de café expresso com rum, creme de leite e hortelã"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={CubanoImg}
          coffeeTags={['especial', 'gelado', 'alcoólico']}
        />
        <CoffeeCard
          coffeeName="Havaiano"
          coffeeDescription="Bebida adocicada preparada com café e leite de coco"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={HavaianoImg}
          coffeeTags={['especial']}
        />
        <CoffeeCard
          coffeeName="Árabe"
          coffeeDescription="Bebida preparada com grãos de café árabe e especiarias"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={ArabeImg}
          coffeeTags={['especial']}
        />
        <CoffeeCard
          coffeeName="Irlandês"
          coffeeDescription="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          coffeePrice={9.9}
          coffeeAmount={1}
          coffeeImage={IrlandesImg}
          coffeeTags={['especial', 'alcoólico']}
        />
      </CoffeesContainer>
    </MainContainer>
  )
}
