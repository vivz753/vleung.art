import Button from '../atoms/Button'
import tw from 'twin.macro'
import Link from 'next/link'

const styles = {
  container: () => [
    tw`bg-red-500`
  ]
}

const Header: any = (props) => {
  const labels: string[] = props.labels

  return (
    <div className="bg-red-500 flex flex-row justify-evenly">
      {labels.map((label) => <Link href={label}><a className="p-12 text-white bg-green-500 hover:bg-green-600">{label}</a></Link>)}
    </div>
  )

}

const Footer: any = (props) => {
  return (
    <footer className="h-auto flex flex-row">footer</footer>
  )
}
const Layout: any = (props) => { 
const labels: string[] = ['home', 'about', 'palette']
return (
  <div className="h-full flex flex-col">
    <Header labels={labels} />
      <div className="w-full bg-yellow-200 flex-grow flex justify-center items-center">
      {props.children}
      </div>
    <Footer />
  </div>
)

}

export default Layout;
