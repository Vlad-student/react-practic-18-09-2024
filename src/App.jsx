import Image from "./components/Image/Image"
import Product from "./components/Product/Product"
import UserProfile from "./components/User-profile/UserProfile"


function App() {
  return (
    <>
    <UserProfile name='alecks' age='45' email='fghgfh@gmail.com'/>
    <UserProfile name='ale' age ='23' email='lfbknbkfgn@gmail.com'/>
    <Image src='https://images.ctfassets.net/cnu0m8re1exe/63GxBnSArMAFAeo8th3l0x/a0fb76407d1b04c0530c2033b3a07ba7/sea-turtle-swimming.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill' alt='turtle'/>
    <Product name='egg' amount='1' cost='12'/>
      </>
  )
}

export default App
