import Head from 'next/head'
import styles from '../styles/Laptop.module.css'
import Link from 'next/link'

export default function slug({laptop, otherLaptop}) {

  console.log(otherLaptop, 'yes')
  return (
    <div className={styles.container}>
      <Head>
          <title>{laptop.name}</title>
      </Head>
      <div className={styles.pizzaWrapperLeft}>
          <img src={laptop.image} alt={laptop.name} className={styles.pizzaImage} />
      </div>
      <div className={styles.pizzaWrapperRight}>
          <div className={styles.pizzaInfo}>
              <p className={styles.pizzaTitle}>{laptop.name}</p>
              <p className={styles.pizzaDescription}>{laptop.description}</p>
          </div>
      </div>
      <div className={styles.otherPizzaWrapper}>
          {otherLaptop.map(other => {
              return(
                  <div className={styles.otherPizzas} key={other.id}>
                      <Link href={"/" + other.slug}><a><img src={other.image} alt={other.name} className={styles.imageW}/>
                      <p>{other.name}</p>
                      </a></Link>
                  </div>
              )
          })}
      </div>

    </div>
  )
}

export async function getStaticPaths() {

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

    // const paths = laptops.map((laptop) => {
    //     return {
    //         paramas: {
    //             slug: `${laptop.slug}`
    //         }
    //     }
    // });

    

    const paths = laptops.map(laptop => ({
        params: {slug: `${laptop.slug}`}
    }));


    return {
      paths,
      fallback: false,
    }
  }



export const getStaticProps = async({params}) => {
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

    const laptop = laptops.filter(lap => lap.slug.includes(params.slug));
    const otherLaptop = laptops.filter(lap => lap.slug !== params.slug)

    return {
        props: {
            laptop: laptop[0],
            otherLaptop: otherLaptop.sort(()=>Math.random() - Math.random()).slice(0,2),
        }
    }
  
}