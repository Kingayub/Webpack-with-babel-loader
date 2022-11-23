import './styles.css'

const content = document.querySelector('.content')

const getSomeInformation = async () => {
    const resolve = await fetch("https://jsonplaceholder.typicode.com/photos?&_limit=10")
    const res = await resolve.json()
    content.append(res.title)
}
getSomeInformation()