import React from 'react';
import items from "./../../service";

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    decrement = () => {
        this.setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    increment = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {

        const displayItems = items.map((item, index) =>
            <section key={item.id} className="Section">
                <img src={item.image} className="ItemImage" />
                <p className="ItemName">{item.name}</p>
                <div className="PriceBox">
                        <button
                            className="PriceDecrement"
                            onClick={this.decrement}>
                        </button>
                        <PriceInput value={this.state.value} />
                        <button
                            className="PriceIncrement"
                            onClick={this.increment}>
                        </button>
                </div>
                <div className="PriceTag">{this.state.count * item.price} Gold</div>
            </section>
        )

        return (
            <div className="Sections">
                {displayItems}
            </div>
        )
    }
}

function PriceInput(props) {
    return (
        <input
            type="number"
            className="PriceInput"
            value={props.value}
        />
    )
}

export default Section;
