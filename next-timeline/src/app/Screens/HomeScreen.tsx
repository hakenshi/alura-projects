import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { Background } from "../Components/Background"
import { Feed } from "../Components/Feed"
import { Footer } from "../Components/Footer"
import { Menu } from "../Components/Menu"
import { Text } from "../Components/Text"
import Image from "next/image"

const HomeScreen = () => {
  return (
    <>
    <main className="flex-1 items-center justify-center flex-col">
      <Background  />
      <Menu />
      <Feed.Content>
        <Image src="https://github.com/hakenshi.png" className="rounded-full" width={144} height={144} alt="lonely icon" />
        <div className="flex border-b border-neutral-200 p-5 ">
          <AiFillYoutube size={24} />
          <AiFillTwitterCircle size={24} />
          <AiFillInstagram size={24} />
          <AiFillGithub size={24} />
        </div>
      <Feed.Header>
        <Text className="font-bold text-3xl" tag="h3">
          Ultimas Notícias
        </Text>
      </Feed.Header>
      <Feed.Posts/>
      </Feed.Content>
    </main>
    <Footer/>
    </>
  )
}


export default HomeScreen