import {useState} from 'react'
import styles from './Home.module.css'
import Link from 'next/link'

export default function Home() {

  

  const laptops = [
      {
          id: '1',
          name: 'macbook pro',
          slug: 'macbook pro',
          toppings: ['higher RAM', 'Higher CPU'],
          image: '/items/mac2.jpg'
      },
      {
          id: '2',
          name: 'Huawei',
          slug: 'Huawei',
          toppings: ['CPU'],
          image: '/items/laptop1.jpg'
      },
      {
          id: '3',
          name: 'another laptop',
          slug: 'another laptop',
          toppings: ['bigger screen'],
          image: '/items/another.jpg'
      },
      {
          id: '4',
          name: 'test',
          slug: 'teset',
          toppings: ['test'],
          image: '/items/test.png'
      },
  ]


  const [keyword, setKeyworkd] = useState('')

  const filteredLaptops = laptops.filter(
      laptop => laptop.name.toLowerCase().includes(keyword) || laptop.toppings.includes(keyword)
  )

  const onInputChange = (e) => {
      e.preventDefault();
      setKeyworkd(e.target.value.toLowerCase())
  }


  return (
    <div className={styles.container}>
        <div className={styles.searchWrapper}>
            <input placeholder='Search for laptop' className={styles.searchBar} onChange={onInputChange} />
        </div>
        <div className={styles.pizzaContainer}>
            {filteredLaptops < 1 ? (
                <div className={styles.nopeContainer}>There is no laptop with that</div>
            ) 
            : 
            (
                filteredLaptops.map((laptop, index) => {
                    return(
                     
                        <div className={styles.pizzaItem} key={laptop.id}>
                            <Link href = {'/' + laptop.slug}><a className={styles.pizzaImageBox}>
                                <img src={laptop.image} alt={laptop.name} className={styles.pizzaImage} />    
                            </a></Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{laptop.name}</p>
                                <p className={styles.pizzaToppings}>{laptop.toppings.map(topping => topping).join(', ')}</p>
                            </div>
                        </div>
                    )}
            ))
            }
        </div>
    </div>    
  )
}
