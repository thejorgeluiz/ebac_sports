import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './slices/apiSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import { Produto } from './types/Produto'
import { adicionarAoCarrinho } from './slices/cartSlice'
import { toggleFavorito } from './slices/favortitosSlice'

function App() {
  const dispatch = useAppDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const carrinho = useAppSelector((state) => state.cart.itens)
  const favoritos = useAppSelector((state) => state.favoritos.itens)

  function handleAdicionar(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionar}
        />
      </div>
    </>
  )
}

export default App
