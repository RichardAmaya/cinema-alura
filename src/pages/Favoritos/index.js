import { useFavoritosContext } from 'context/Favoritos';
import styles from './Favoritos.module.css'
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos(){
    const {favorito} = useFavoritosContext()

    return(
        <>
        <Banner img='favorite' color='#af7eaa'></Banner>
        <Titulo>
            <h1>Mis favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id}></Card>
            })}
        </section>

        </>
    )
}

export default Favoritos;