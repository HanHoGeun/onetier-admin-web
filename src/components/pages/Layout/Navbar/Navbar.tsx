import './styles'
interface menuList {
    menuList: any
}

const Navbar = (props: menuList) => {
    const menu1depth = props.menuList.filter((f:any) => f.level === 1)
    return(
        <div>탑메뉴</div>
    )
}

/* export default function List({ items, onClick }) {
    return (
        <ol>
            {items.map(({ id, title }) => (
                <li key={id}>
                    {title}
                </li>
            ))}
            ,
            <button type="button" onClick={onClick}>
                클릭
            </button>
        </ol>
    );
} */

export default Navbar
