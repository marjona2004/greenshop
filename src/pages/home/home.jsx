import { Advert } from "../../components/pages/home-components/advert/advert"
import { Hero } from "../../components/pages/home-components/hero/hero"
import { Main } from "../../components/pages/home-components/main/main"
import { Blog } from "../../components/pages/home-components/our-blog/blog"


export const Home = () => {
  return (
    <div>
      <Hero  />
      <Main />
      <Advert />
      <Blog />
    </div>
  )
}
