function Nav() {
    return (
        <div className="Nav_layout">
            <h4 className="Nav_logo">GUANG</h4>
            <div className="Nav_item">
                <h4>WORK</h4>
                <h4>ABOUT</h4>
                <h4>CONTACT</h4>
            </div>
        </div>
    )
}

function Head() {
    return (
        <div>
            <h1>Head TBC</h1>
        </div>
    )
}

const cards= card_data.map(item => 
    <WorkCard 
        {...item}
        // title={item.title}
        // time={item.time}
        // num={item.num}
    />
    )

function WorkCard(props) {
    let numLayout;
    if (props.num ===1 ) {
        numLayout = "indi_card_layout"
    } else if (props.num === 2) {
        numLayout= "indi_card_layout_alter"
    }

    return (
        <a className={numLayout} href={props.url}>
            <div className="card_img"></div>
            <h2 className="card_title">{props.title}</h2>
            <h4 className="card_time">{props.time}</h4>
        </a>
    )
}

function Work() {
    return (
        <div>
            <h1>Projects TBC</h1>
            <div className="card_layout">
                {cards}
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h1>Contact info</h1>
        </div>
    )
}

function Foot() {
    return (
        <div>
            <h1>Foot</h1>
            <h4>@ Coded by Guangyu Chen</h4>
        </div>
    )
}

function IndexPage() {
    return (
        <div>
            <Nav />
            <div className="MainBody">
                <Head />
                <Work />
                <Contact />
                <Foot />
            </div>
            
        </div>
    )
} 

ReactDOM.render(<IndexPage />, document.getElementById("root"));